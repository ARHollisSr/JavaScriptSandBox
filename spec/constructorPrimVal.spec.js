describe("Constructors returning primitives", function() {
    /*
    function called as a function. 1 is expected return val.
    */
    it("return value honored when not called as a constructor", function() {
      expect(Ninja()).toEqual(1);
    });

    /*
    verify the return value of 1 is ignored and that we receive a new
    intialized object as a result of using new.
    */
  
    it("object returned when called as a constructor", function() {
      expect(typeof ninja).toEqual('object');
    });  

    it("ninja object has skulk method", function() {
        expect(typeof ninja.skulk).toEqual('function');
      });  
  });
  