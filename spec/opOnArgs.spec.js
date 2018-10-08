describe('Sum of arguments', function() {
  it('add two number', function() {
    expect(sum(1, 2)).toEqual(3);
  });

  it('add three numbers', function() {
    expect(sum(1, 2, 3)).toEqual(6);
  });

  it('add four numbers', function() {
    expect(sum(1, 2, 3, 4)).toEqual(10);
  });
});