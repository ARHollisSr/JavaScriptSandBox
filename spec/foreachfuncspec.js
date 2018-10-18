describe('Call iteration function - return correct context', function() {
    it('function context is correct', function() {
        forEach(weapons,function(index){
            expect(this).toEqual(weapons[index]);
        });
    });

  });