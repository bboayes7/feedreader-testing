$(function() {
    //RSS Feeds Test Suite
    describe('RSS Feeds', function() {

        //TEST: Ensure that the allFeeds object is defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //TEST: Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
        it('urls are defined', function(){
            for(let feed of allFeeds){
                //ensure it has a url defined
                expect(feed.url).toBeDefined();
                
                //ensure that the url is not empty
                expect(feed.url.length).not.toBe(0);
            }
        });

        //TEST: Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
        it('names are defined', function(){
            for(let feed of allFeeds){
                //ensure it has a name defined
                expect(feed.name).toBeDefined();

                //ensure that the name is not empty
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    //The Menu Test Suite
    describe('The Menu', function(){
        //use the body and icon nodes for tests
        const body = document.querySelector('body'),
        icon = document.querySelector('.menu-icon-link');

        //TEST: Ensure that the menu element is hidden by default
        it('is hidden by default', function(){
            expect(body).toHaveClass('menu-hidden');
        });

        //TEST: Ensure the menu changes visibility when the menu icon is clicked
        it('changes visibility when menu icon is clicked', function(){
            //simulate a click using the click() function to toggle .menu-hidden off
            icon.click();

            //expect .menu-hidden to not be a class of <body>
            expect(body).not.toHaveClass('menu-hidden');

            //click again to toggle .menu-hidden class on
            icon.click();

            //expect body to have a .menu-hidden class
            expect(body).toHaveClass('menu-hidden');
        });
    });

    //Initial Entries Test Suite
    describe('Initial Entries', function(){

        //Use a beforeEach since loadFeed is asynchronous
        beforeEach(function(done){
            //pass in the index of 0 since that's the first feed to load
            loadFeed(0, function(){
                done();
            });
        });

        //TEST: Ensure when the loadFeed function is called and completes its work, there is at least a single entry element within the feed container
        it('contains at least a single .entry element within the .feed container', function(done){
            //calling querySelectorAll for .feed(parent) and .entry(child) will return a NodeList of all entries in the feed
            //if that node list length is greater than or equal to 1, the test passes
            expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThanOrEqual(1);
            done();
        });
    });

    //New Feed Selection Test Suite
    describe('New Feed Selection', function(){        
        let feedEntry, feedEntry2;

        beforeEach(function(done){
            //grab the first entry link that's already loaded
            feedEntry = document.querySelector('.feed').children[0];

            //change the feed
            loadFeed(2, function(){
                //grab the first entry of the newly loaded feed
                feedEntry2 = document.querySelector('.feed').children[0];
                done();
            });
        });

        //TEST: Ensure when a new feed is loaded by the loadFeed function that the content actually changes
        it('changes the feed content when a new feed is loaded', function(done){
            //compare feed entries to not be the same
            expect(feedEntry).not.toBe(feedEntry2);
            done();
        });
    });

}());
