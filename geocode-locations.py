#!/usr/bin/python

MANHATTAN_ZIP_CODES = [
  10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011, 
  10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019, 10020, 10021, 10022, 
  10023, 10024, 10025, 10026, 10027, 10029, 10030, 10031, 10032, 10033, 10034, 
  10035, 10036, 10037, 10038, 10039, 10040, 10044, 10046, 10047, 10048, 10055,
  10060, 10069, 10072, 10082, 10087, 10090, 10095, 10099, 10101, 10102, 10103,
  10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10112, 10113, 10114,
  10115, 10116, 10117, 10118, 10119, 10120, 10121, 10122, 10123, 10124, 10125,
  10126, 10128, 10129, 10130, 10131, 10132, 10133, 10138, 10149, 10150, 10151,
  10152, 10153, 10154, 10155, 10156, 10157, 10158, 10159, 10160, 10161, 10162,
  10163, 10164, 10165, 10166, 10167, 10168, 10169, 10170, 10171, 10172, 10173,
  10174, 10175, 10176, 10177, 10178, 10179, 10185, 10197, 10199, 10211, 10259,
  10261, 10272, 10276
]

import csv, xmlrpclib

geocoded_file = open("geocoded-locations.csv", "r")

geocodes = {}

for (address, lat, long) in csv.reader(geocoded_file):
  geocodes[address] = (lat, long)

geocoded_file.close()

locations_file = open("locations.csv", "r")

server = xmlrpclib.Server("http://rpc.geocoder.us/service/xmlrpc")

for (address,) in csv.reader(locations_file):
  if address.find("&") == -1 or address in geocodes: continue
  
  print "geocoding %s" % address
  
  result = server.geocode("%s, New York, NY" % address)
  
  geocoded_results = filter(lambda x: "lat" in x and "long" in x, result)
  
  if len(geocoded_results) > 1:
    manhattan_results = filter(lambda x: x["zip"] in MANHATTAN_ZIP_CODES, geocoded_results)
    
    if len(manhattan_results) == 1:
      geocoded_results = manhattan_results
      
  if len(geocoded_results) > 1:
    print "  ambiguous geocode"
  elif len(geocoded_results) == 0:
    print "  no results"
  else:
    (lat, long) = (geocoded_results[0]["lat"], geocoded_results[0]["long"])
    
    geocodes[address] = [lat, long]
    
    geocoded_file = open("geocoded-locations.csv", "a")    
    csv.writer(geocoded_file).writerow([address, lat, long])
    geocoded_file.close()
    
    print "  %f,%f" % (lat, long)
  
locations_file.close()