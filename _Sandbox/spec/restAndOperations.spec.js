describe('Name of the group', () => {
    it('We can add two numbers', () => {
      expect(sum(1, 2)).toEqual(3);
    });
    it('We can add three numbers', () => {
      expect(sum(1, 2, 3)).toEqual(6);
    });
    it('We can add four numbers', () => {
      expect(sum(1, 2, 3, 4)).toEqual(10);
    });
  });