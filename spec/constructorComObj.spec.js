describe('Return own constructed objects', function() {
    it('the first ninja is skulking', function() {
      expect(ninja1.skulk()).toEqual(ninja1);
    });

    it('the second ninja is skulking', function() {
        expect(ninja2.skulk()).toEqual(ninja2);
      });

  });