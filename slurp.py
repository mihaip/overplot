#!/usr/bin/python

import feedparser, csv, time, sys, codecs, re
from formatter import NullFormatter
from htmllib import HTMLParser
from time import mktime

ENTRY_ID_RE = re.compile("http://www\.overheardinnewyork\.com/archives/(\d+)\.html")
STRIP_HTML_RE = re.compile("< */? *\w+ */?\ *>")

class Quote:
  def __init__(self):
    self.quote = ''
    self.location_string = None
    self.source = None
  
  def is_valid(self):
    return self.quote and self.location_string

class EntryParser(HTMLParser):
  def __init__(self):
    HTMLParser.__init__(self, NullFormatter())
  
  def parse(self, entry):
    self.quotes = []
    self.current_quote = None
    
    self.in_p = False
  
    self.feed(entry.summary)
  
  def start_p(self, attrs):
    self.in_p = True
    self.accumulated_data = ""
    
  def end_p(self):
    self.in_p = False
    
    data = self.accumulated_data.strip()
    if data.find("<br />") == 0:
      data = data[6:]
    
    data = data.strip()
    
    if not self.current_quote:
      self.current_quote = Quote()
      self.quotes.append(self.current_quote)
    
    consumed = True
    done = False

    if data.find("--") == 0:
      location = data[2:]
      location = STRIP_HTML_RE.sub("", location).strip()
      self.current_quote.location_string = location
    elif data.find("Overheard by:") != -1:
      self.current_quote.source = data[data.find("Overheard by:") + 13:].strip()
      done = True
      consumed = True
    else:
      if self.current_quote.location_string:  
        done = True
        consumed = False
      else:
        self.current_quote.quote = data

    if done:
      self.current_quote = None
    
    if not consumed:
      self.current_quote = Quote()
      self.quotes.append(self.current_quote)      
      self.current_quote.quote = data
    
  def handle_data(self, data):
    if self.in_p:
      self.accumulated_data += data

  def handle_starttag(self, tag, method, attrs):
    self.unknown_starttag(tag, attrs)
    method.__call__(self, attrs)

  def handle_endtag(self, tag, method):
    method.__call__(self)
    self.unknown_endtag(tag)

  def unknown_starttag(self, tag, attrs):
    if self.in_p:
      self.accumulated_data += self.get_starttag_text()

  def unknown_endtag(self, tag):
    if self.in_p:
      self.accumulated_data += "</%s>" % tag

continuation = None
base_url = "http://www.google.com/reader/public/atom/feed/http%3A%2F%2Fwww.overheardinny.com%2Findex.xml"

dump_file = open("dump.csv", "w")
csv_writer = csv.writer(dump_file)
entry_parser = EntryParser()
encoder = codecs.getencoder('us-ascii')

written_rows = {}

while True:
  url = base_url
  if continuation:
    url += "?c=%s" % continuation
  
  print "fetching url %s" % url
  
  chunk = feedparser.parse(url)
  
  print "got %d entries" % len(chunk.entries)

  for entry in chunk.entries:
    id_match = ENTRY_ID_RE.search(entry.link)
    
    if not id_match: continue
    
    id = id_match.group(1)
    timestamp = str(int(mktime(entry.published_parsed)))
    
    entry_parser.parse(entry)
    
    quotes = entry_parser.quotes
    
    if not quotes:
      print >> sys.stderr, "Warning, no quotes for %s" % entry.link
    
    for quote in quotes:
      if quote.is_valid():
        row = (id, entry.title, timestamp, quote.quote, quote.location_string, quote.source)
        row = map(lambda x: x or "", row)
        row = map(lambda x: encoder(x, 'xmlcharrefreplace')[0], row)
        
        row = tuple(row)
        
        if row not in written_rows:
          csv_writer.writerow(row)
          written_rows[row] = True
  
  
  continuation = chunk.feed.continuation  
  if not continuation: break

dump_file.close()