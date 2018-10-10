describe('Difference between func and method invocations', function() {
  it('function call on window', function() {
    expect(whatsMyContext()).toEqual(window);
  });

  it('Another function call in window', function() {
    expect(getMyThis()).toEqual(window);
  });

  it('Working with 1st ninja obj', function() {
    expect(ninja.getMyThis()).toEqual(ninja);
  });

  it('Working with 2nd ninja obj', function() {
    expect(ninja2.getMyThis()).toEqual(ninja2);
  });
});