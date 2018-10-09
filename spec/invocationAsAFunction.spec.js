describe('Non strict mode vs strict mode invocation', function() {
  it('Non strict mode, ninja function, the context is the global window object',
     function() {
       expect(ninja()).toEqual(window);
     });

  it('In strict mode samurai function, the context is undefined', function() {
    expect(samurai()).toEqual(undefined);
  });
});