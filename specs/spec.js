var $helper = require('../_helpers/_helper');

describe('demo application', function() {
  
  beforeEach(function () {
    browser.get('http://suggst-esp826612e.rhcloud.com/');
  });

  it('should show registration form', function() {
    
    expect(element(by.model('main.name')).getAttribute('value')).toBe('');
    expect(element(by.model('main.email')).getAttribute('value')).toBe('');

    $helper.takeSnapshot();
  });

  it('should show form level error for mandatory fields', function() {
    
    $helper.click.submitRegisterForm();
    
    expect(element(by.id('formDataMandatoryFieldError')).getText()).toEqual('Please provide mandatory fields');

    $helper.takeSnapshot();
  });

  it('should show email invalid error', function() {
    
    element(by.model('main.email')).clear().sendKeys('email@adf.');
    
    $helper.click.submitRegisterForm();
    
    expect(element(by.id('emailInvalidError')).getText()).toEqual('This needs to be a valid email');

    $helper.takeSnapshot();
  });

  it('should show email value is too short error', function() {
    
    element(by.model('main.email')).clear().sendKeys('abc');
    
    $helper.click.submitRegisterForm();
    
    expect(element(by.id('emailMinLengthError')).getText()).toEqual('Email entered is too short');

    $helper.takeSnapshot();
  });

  it('should show email value is too long error', function() {
    
    element(by.model('main.email')).clear().sendKeys('abc1234567890@12345c.com');
    
    $helper.click.submitRegisterForm();
    
    expect(element(by.id('emailMaxLengthError')).getText()).toEqual('Email entered is too long');

    $helper.takeSnapshot();
  });

  it('should show form error, when details provided are invalid', function() {
    
    element(by.model('main.name')).clear().sendKeys('pro-demo');
    element(by.model('main.email')).clear().sendKeys('abc12390@12345c.com');
    
    $helper.click.submitRegisterForm();
    
    expect(element(by.id('formDataInvalidError')).getText()).toEqual('Provided form data is invalid');

    $helper.takeSnapshot();
  });

});
