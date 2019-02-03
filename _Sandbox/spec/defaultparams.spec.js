describe('Using default parameters', () => {
  it('Default value was used', () => {
    expect(peformAction('Rory')).toEqual('Rory skulking');
  });

  it('Passed in value used', () => {
    expect(peformAction('Lisa', 'walking')).toEqual('Lisa walking');
  });
});