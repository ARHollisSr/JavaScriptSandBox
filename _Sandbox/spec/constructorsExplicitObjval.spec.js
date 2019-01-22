describe('Constructors explicitly returning object values', () => {
  
  it('object returned is object assigned...',
     () => {
        var emperor = new Emperor();
        expect(emperor).toEqual(puppet);
     });

  it('object returned is object assigned...',
     () => {
        var emperor = new Emperor();
        expect(emperor.rules).toBeFalsy();
     });
});