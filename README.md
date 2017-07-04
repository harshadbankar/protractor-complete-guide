
# Step 2 - Add protractor basic test spcecification file 

## specs.js Explained 

  * describe : its global jasmine function which takes two params, 1: stirng: Name or title for a spec suit, 2: function: This is a block of code that implements the suit

  * it : This is also a global jasmine function which makes same parameters, and in function block it explains the specs

  * browser : Is a global object created by Protractor, which is used for browser-level commands, e.g. browser.get('url');

  * expect : Expectations are built with this function which take a value and chained with a Macher function.

  * toBe : Is example of Macher function, which will compare value of provided variable with value provided in expect function

  * byModel : This will return the element which maches the given model name, this is spcific to angularjs

  * element : this is a helper function for finding and interacting with DOM elements, it searches for the element on the page and it requries a locator strategy for locating the element, in our case it is byModel.

  * getAttribute: This is normal JS method to get attribute of DOM element 