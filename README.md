# Disclaimer
This tool was last run in mid-2006, Google Maps API details (and especially
those relating to geocoding) might have changed since then.

## To generate a new dataset

1. mkdir data.n
2. cp *.csv data.n/
3. ./slurp.py
4. ./extract-locations.py
5. open http://persistent.info/overplot/tools/geocoder.html
6. copy and paste the contents of locations.csv into the top box and press
   "Geocode"
6. copy and paste bottom box into geocoded-locations.csv
7. ./generate-json.py > web/quotes.js

## To generate a new neighborhood

1. Open tools/neighborhood.html
2. Draw a neighborhood polygon (in clockwise order)
3. Press export
4. Copy the resulting point pairs to neighborhoods.csv
5. Re-run ./generate-json.py (see above)
