describe('Validate grettings', function() {
    
    it('lambda greeting is proper', function() {
      expect(greet("Hollis")).toEqual("Greetings Hollis");
    });
  
    it('expression greeting is proper', function() {
        expect(anotherGreet("Hollis")).toEqual("Greetings Hollis");
    });
  
  });