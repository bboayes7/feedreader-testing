# Feed Reader Testing Project

## Description

This is a web-based application that reads RSS feeds. The goal of this project is to run unit
tests on this application using the Jasmine framework.

To get started run the index.html on your browser and scroll down to the bottom to see if all 7 tests are passed.

## Tests
There are 7 tests in this project among 4 test suites. (RSS Feeds, The Menu, Initial Entries, New Feed Selection)

### RSS Feeds
 1. Loop through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
 2. Loop through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

### The Menu
 1. Ensure that the menu element is hidden by default.
 2. Ensure the menu changes visibility when the menu icon is clicked.

 ### Initial Entries
 1. Ensure when the loadFeed function is called and completes its work, there is at least a single entry element within the feed container.

 ### New Feed Selection
 1. Ensure when a new feed is loaded by the loadFeed function that the content actually changes.