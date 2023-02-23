import formatCurrencyDecimal from '../formatCurrencyDecimal';

describe('formatCurrencyDecimal function', () => {
  it('should properly format amounts provided in cents', () => {
    const value = 123456798;
    const expected = '1,234,567.98';

    expect(formatCurrencyDecimal(value)).toBe(expected);
  });
});
