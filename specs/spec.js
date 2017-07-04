describe('demo application', function() {
  it('should show registration form', function() {
    
    browser.get('http://suggst-esp826612e.rhcloud.com/');
    expect(element(by.model('main.name')).getAttribute('value')).toBe('');
    expect(element(by.model('main.email')).getAttribute('value')).toBe('');

  });
});
