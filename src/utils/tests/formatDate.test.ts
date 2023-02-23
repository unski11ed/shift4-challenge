import formatDate from '../formatDate';

describe('formatDate function', () => {
  it('should properly format date to a US format', () => {
    const value = new Date(2022, 2, 1);
    const expected = '03/01/2022';

    expect(formatDate(value)).toBe(expected);
  });
});
