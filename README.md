
# Step 4 - Generating report for test perfomed #

# Where to check reports #

## run test with 'protractor config.js' and once all 6 suits are done then check /reports/protractor-snapshot directory for reports! 
* /image : This directory contains list of all the resolutions on which test has been perfomed
* /source : This directory contains list of html content which was saved while performing test 
* report.json : This file contains all information above the complete test report, you can feed this json to application which can understand and render the report on dashboard!

# config.js Explained #
    
*  protractor-snapshot: This module provides very handy configuration to capture screenshot of your application, also you can save the html content of application to check it later on.
    Please find more configuraion options here: https://www.npmjs.com/package/protractor-snapshot

### If you want to explore more on Complete config file parameters, please refer: https://github.com/angular/protractor/blob/master/lib/config.ts

# Helpers Explained #

## It is highly recommended to have helper file which will contain all the funtion you need most frequently while writting spces, such as click submit button, select option from dropdown, take snapshot. This way it will prevent poluting our specs with common code and make it more readable to others

* takeSnapshot - This function will use 'cycle' function of protractor-snapshot and capture screen with html content

* click.submitRegisterForm - This function is finding submit button in DOM and then performing click on it!

