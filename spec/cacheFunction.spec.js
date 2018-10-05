describe("Cache a function", function() {
  it("adds a function", function() {
    expect(store.add(ninja)).toBeTruthy();
  });

  it("does not add a function", function() {
    expect(store.add(ninja)).toBeFalsy();
  });  
});

