describe("Hello world", function() {
    it("says hello", function(){
        expect(helloWorld()).toEqual("Hello world!");
    });

    it("contains World", function(){
        expect(helloWorld()).toContain("Hello world!");
    });

});