import parseCurrency from '../parseCurrency';

describe('parseCurrency function', () => {
  it('convert amount as a string to a number', () => {
    const value = '1,234,567.99';
    const expected = 1234567.99;

    expect(parseCurrency(value)).toBe(expected);
  });
});
