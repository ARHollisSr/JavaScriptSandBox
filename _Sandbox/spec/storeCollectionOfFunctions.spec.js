describe('Store', function() {
  it('says Function was safely added.', function() {
    expect(store.add(stock)).toBeTruthy();
  });

  it('says Function was only added once.', function() {
      expect(store.add(stock)).toBeFalsy();
  });
});
