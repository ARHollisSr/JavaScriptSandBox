describe("disemvoweler", function() {
    it("should remove all lowercase vowels", function(){
        expect(disemvowel("Hello world")).toEqual("Hll wrld");
    });

    it("should remove all uppercase vowels", function(){
        expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
    });

    it("shouldn't change empty strings", function(){
        expect(disemvowel("")).toEqual("");
    });

    it("shouldn't change strings with no vowels", function(){
        expect(disemvowel("Mhmm")).toEqual("Mhmm");
    });
});