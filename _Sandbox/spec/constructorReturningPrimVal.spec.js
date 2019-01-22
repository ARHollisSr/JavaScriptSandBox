describe('Constructors returning primitives', () => {
    it('Return value when not called as a constructor...', () => {
        expect(Ninja()).toEqual(1);
    });

    it('Object returned when called as a constructor', () => {
        var ninja = new Ninja();
        expect(typeof ninja).toEqual("object");
    });
});                                       