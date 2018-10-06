describe('Default value used', function() {
    
    it('default val used for Fuma', function() {
      expect(performAction('Fuma')).toEqual('Fuma skulking');
    });
  
    it('default val used for Yoshi', function() {
      expect(performAction('Yoshi')).toEqual('Yoshi skulking');
    });
  
    it('default val used for Hattori', function() {
      expect(performAction('Hattori')).toEqual('Hattori skulking');
    });
  
    it('supplied val used for Yagyu', function() {
      expect(performAction('Yagyu', 'sneaking')).toEqual('Yagyu sneaking');
    });
  });
  