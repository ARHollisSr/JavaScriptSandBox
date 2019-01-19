describe("Is value a prime", function() {
  it('is Prime', () => {
    expect(isPrime(5)).toBeTruthy();
  });

   it('answer was cached', function() {
    expect(isPrime.answers[5]).toBeTruthy();
  });

});