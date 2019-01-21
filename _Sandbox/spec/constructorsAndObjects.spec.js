describe('Invoking via new', () => {
    it('should return own constructed object...', () => {
        var ninja1 = new Ninja();        
        expect(ninja1.skulk()).toEqual(ninja1)
    });

    it('should return own constructed object...', () => {
        var ninja2 = new Ninja();        
        expect(ninja2.skulk()).toEqual(ninja2)
    });
});