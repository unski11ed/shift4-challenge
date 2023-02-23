import formatMonth from '../formatMonth';

describe('formatMonth function', () => {
  it('should properly format date to show month and year in US english', () => {
    const value = new Date(2022, 2);
    const expected = 'March 2022';

    expect(formatMonth(value)).toBe(expected);
  });
});
