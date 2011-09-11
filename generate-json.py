#!/usr/bin/python

import csv, sys

def js(text):
  return text.replace("\r", "\\r").replace("\n", "\\n").replace("'", "\\'").replace("\"", "\\\"")

class Polygon:
  def __init__(self):
    self.points = []
  
  def add_point(self, x, y):
    self.points.append([x, y])
  
  def contains_point(self, x, y):
    hits = 0
  
    (lastx, lasty) = self.points[-1]
  
    # Walk the edges of the polygon
    for (curx, cury) in self.points:
      # raising exception is a hacky workaround for lack of breaking to a label
      try:
        if cury == lasty: raise Exception
    
        if curx < lastx:
          if x >= lastx: raise Exception
          leftx = curx
        else:
          if x >= curx: raise Exception
          leftx = lastx
    
        if cury < lasty:
          if y < cury or y >= lasty: raise Exception
    
          if x < leftx:
            hits += 1
            raise Exception
    
          test1 = x - curx
          test2 = y - cury
        else:
          if y < lasty or y >= cury: raise Exception
    
          if x < leftx:
            hits += 1
            raise Exception
    
          test1 = x - lastx
          test2 = y - lasty
    
        if test1 < (test2 / (lasty - cury) * (lastx - curx)):
          hits += 1

      except Exception:
        None

      (lastx, lasty) = (curx, cury)
    
    return ((hits & 1) != 0)
  
  def get_center(self):
    # Find polygon center of mass
    # See http://astronomy.swin.edu.au/~pbourke/geometry/polyarea/
    area = 0
    for i in range(0, len(self.points)):
      p1 = self.points[i]
      p2 = self.points[(i + 1) % len(self.points)]
      
      area += p1[0] * p2[1] - p2[0] * p1[1]
    
    area /= 2.0
    
    (center_x, center_y) = (0, 0)
    
    for i in range(0, len(self.points)):
      p1 = self.points[i]
      p2 = self.points[(i + 1) % len(self.points)]

      d = p1[0] * p2[1] - p2[0] * p1[1]
      
      center_x += (p1[0] + p2[0]) * d
      center_y += (p1[1] + p2[1]) * d
    
    center_x /= 6.0 * area
    center_y /= 6.0 * area
    
    return (center_x, center_y)

class Neighborhood:
  def __init__(self, name, points_str, vertices_str):
    self.name = name;
  
    point_pairs = points_str.split("\n")
    
    self.polygon = Polygon()
    
    for point_pair in point_pairs:
      (lat, lng) = point_pair.split(",")
      
      self.polygon.add_point(float(lng), float(lat))
    
    if vertices_str:
      self.vertices = vertices_str.split(",")
    else:
      self.vertices = map(lambda x: str(x), range(0, len(point_pairs)))
      self.vertices.append("0")
    
    self.quote_count = 0

  def add_quote(self):
    self.quote_count += 1
  
  
neighborhoods = []

neighborhoods_file = open("neighborhoods.csv", "r")
for line in csv.reader(neighborhoods_file):
  name = line[0]
  points_str = line[1]
  
  if len(line) == 2:
    vertices_str = None
  else:
    vertices_str = line[2]
  neighborhoods.append(Neighborhood(name, points_str, vertices_str))
  
neighborhoods_file.close()

# maintain both maps so that we can normalize aliased locations to the more
# popular one
location_to_lat_lng = {}
lat_lng_to_location = {}
lat_lng_to_neighborhood = {}

geocoded_file = open("geocoded-locations.csv", "r")
for (location, lat, lng) in csv.reader(geocoded_file):
  lat_lng = (lat, lng)
  location_to_lat_lng[location] = lat_lng
  
  if lat_lng not in lat_lng_to_location:
    lat_lng_to_location[lat_lng] = location
    
    neighborhoodIndex = -1
    
    for i in range(0, len(neighborhoods)):
      neighborhood = neighborhoods[i]
      if neighborhood.polygon.contains_point(float(lng), float(lat)):
        neighborhoodIndex = i
        #break
    
    lat_lng_to_neighborhood[lat_lng] = neighborhoodIndex
    
geocoded_file.close()

rejected_quotes = 0
accepted_quotes = 0

quotes_by_location = {}
dump_file = open("dump.csv", "r")
for [id, title, timestamp, quote, location, source] in csv.reader(dump_file):
  if location not in location_to_lat_lng: 
    rejected_quotes += 1
    continue
  else:
    accepted_quotes += 1
  
  # normalize location by lat/lng
  lat_lng = location_to_lat_lng[location]
  location = lat_lng_to_location[lat_lng]
  
  neighborhoodIndex = lat_lng_to_neighborhood[lat_lng]
  if neighborhoodIndex != -1:
    neighborhoods[neighborhoodIndex].add_quote()
  
  key = (location, neighborhoodIndex, lat_lng)
  
  if key not in quotes_by_location:
    quotes_by_location[key] = []
    
  quotes_by_location[key].append([id, title, quote, source, timestamp])

print "var N = Neighborhood;var S = QuoteSet;var Q = Quote;"

print "var neighborhoods = ["

first_neighborhood = True

for neighborhood in neighborhoods:
  (center_lng, center_lat) = neighborhood.polygon.get_center()
  print "  %snew N('%s', %d, [%s], %f, %f, [%s])" % (
    not first_neighborhood and "," or "",
    js(neighborhood.name),
    neighborhood.quote_count,
    ",".join(map(lambda x: "[%f,%f]" % (x[1], x[0]), neighborhood.polygon.points)),
    center_lat,
    center_lng,
    ",".join(neighborhood.vertices)
  )
  
  first_neighborhood = False
print "];"

print "var quotes = ["

first_quote_set = True

for key in quotes_by_location.keys():
  (location, neighborhoodIndex, lat_lng) = key
  
  print "  %snew S('%s', %s, %s, %d, [" % (
    not first_quote_set and "," or "",
    js(location),
    lat_lng[0],
    lat_lng[1],
    neighborhoodIndex
  )
  
  quotes = quotes_by_location[key]
  first_quote = True
  
  for (id, title, quote, source, timestamp) in quotes:
    print "    %snew Q('%s', '%s', '%s', '%s', %s)" % (
      not first_quote and "," or "",
      js(id),
      js(title),
      js(quote),
      js(source),
      timestamp
    )
    first_quote = False
  
  print "  ])"
  first_quote_set = False

print "];"

print >> sys.stderr, "  Accepted %d quotes" % (accepted_quotes)
print >> sys.stderr, "  Rejected %d quotes since they were not geo-coded" % (rejected_quotes)