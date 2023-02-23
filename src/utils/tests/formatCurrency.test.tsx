import formatCurrency from '../formatCurrency';

describe('formatCurrency function', () => {
  it('should properly format amounts provided in cents with $ sign', () => {
    const value = 123456798;
    const expected = '$1,234,567.98';

    expect(formatCurrency(value)).toBe(expected);
  });
});
