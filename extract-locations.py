#!/usr/bin/python

import csv, re

dump_file = open("dump.csv", "r")

locations = {}

for [id, title, timestamp, quote, location_string, source] in csv.reader(dump_file):
  if location_string.find(" train") != -1 or location_string.find(" bus") != -1:
    continue
  
  locations[location_string] = locations.get(location_string, 0) + 1

dump_file.close()

sorted_pairs = map(lambda x: [locations[x], x], locations)
sorted_pairs.sort()
sorted_pairs.reverse()

locations_file = open("locations.csv", "w")

locations_csv = csv.writer(locations_file)

for (count, location) in sorted_pairs:
  locations_csv.writerow([location])

locations_file.close()