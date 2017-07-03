# protractor-complete-guide #
Creating this repository for those who want to start E2E testing of web application using protractor

# What is E2E (End to End) testing? #

     End to End testing is a technique which makes sure that your application is behaving as intended when put in front of the user. Means you are making sure of proper backend response, presentation of your application on different
     devices (Responsive Design), behaviour of application as per defined states of it (Like app state after & before login)

# What makes E2E testing essential #

    Consider manual testing of enterprise web application which has over 500+ functionality on every single **release**.
    That sounds like testing is not a easy job without automation of it right?

    If you have proper E2E test suites for your application with report generation and rendering tools then you just have to do testing of new functionality that is going live in release and not the complete application testing.

    Configuration of E2E test to run in Contineous Integration tools like **Jenkins, Bamboo ** is also important, as they run it automatically on daily basis and you will get clear overview of development work going on. Also if anything is breaking then you can directly report it to developers, before even jumping to actual test!

    Below are important points for E2E testing: 
        
        * Testing what we are presenting to the end user
        * UI testing, helps to verify UI behaviour in different scenario (Also responsive testing)
        * Is my backend communicating with my frontend?
        * Can I release this code?
        * It does NOT replace Unit Testing!

# About Protractor #

    Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.##

    Good to know:
        * Build on top of WebDriverJS
        * Uses Jasmine for its test syntax
        * Uses native events and browser-specific driers to interact with your application
        * Waits for the AngularJs to be bootstrapped
        * Listen to AngularJS internals ($http, $timeout…) to determine when to go for
          next steps
        * AngularJs specific Api (By binding, repeaters…)

    More here: http://www.protractortest.org
# Setup #

    1. Install latest nodejs.  Download here: https://nodejs.org/en/
        - Make sure installation is successful by running node -v , npm -v on terminal
    2. npm install -g protractor
        - This will install two tools, one is protractor (test run: protractor --version) & webdriver-manager
        - -g means global installtion
    3. webdriver-manager update
        - This will update driver manager
    4. webdriver-manager start
        - This will start selenium server and output bunch of logs initially

    Now we are ready to start using protractor!

# Next:  Checkout step 2 branch #
    





