describe('Check for prime number and cache if prime', function() {
    
  it('value is prime', function() {
    expect(isPrime(5)).toBeTruthy();
  });

  it('answer was cached', function() {
    expect(isPrime.answers[5]).toBeTruthy();
  });

});