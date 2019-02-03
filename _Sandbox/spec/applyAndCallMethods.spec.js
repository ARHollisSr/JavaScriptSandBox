describe('Using Apply and Call Methods', () => {

    it('juggled via apply...', () => {
        var ninja = {};
        juggle.apply(ninja,[1,2,3,4]);
        expect(ninja.result).toEqual(10);
    });

    it('juggled via call...', () => {
        var ninja = {};
        juggle.call(ninja,5,6,7,8);
        expect(ninja.result).toEqual(26);
    });
});