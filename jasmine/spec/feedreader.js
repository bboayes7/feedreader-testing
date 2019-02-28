/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function(){
            for(let feed of allFeeds){
                //ensure it has a url defined
                expect(feed.url).toBeDefined();
                
                //ensure that the url is not empty
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function(){
            for(let feed of allFeeds){
                //ensure it has a name defined
                expect(feed.name).toBeDefined();

                //ensure that the name is not empty
                expect(feed.name.length).not.toBe(0);
            }
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){
        const body = document.querySelector('body'),
        menuHidden = document.querySelector('.menu-hidden'),
        icon = document.querySelector('.menu-icon-link');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function(){
            //make sure the body tag has the .menu-hidden class
            expect(body).toHaveClass('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
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


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        let feed = document.querySelector('.feed');
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //Use a beforeEach since loadFeed is asynchronous
        beforeEach(function(done){
            //pass in the index of 0 since that's the first feed to load
            loadFeed(0, function(){
                done();
            });
        });

        it('contains at least a single .entry element within the .feed container', function(done){
            //calling the children function will return an HTMLCollection of .entry-links
            //calling the length of the returned HTMLCollection will give a number of entries inside the .feed
            expect(feed.children.length).toBeGreaterThanOrEqual(1);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){        
        let feedEntry, feedEntry2;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
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

        it('changes the feed content when a new feed is loaded', function(done){
            //compare feed entries to not be the same
            expect(feedEntry).not.toBe(feedEntry2);
            done();
        })

    });

}());
