const EN_US_THOUSANDS_SEPARATOR = ',';

export default function parseCurrency(input: string) {
  const separatorRegex = new RegExp(`${EN_US_THOUSANDS_SEPARATOR}`, 'g');
  const cleanNumberString = input.replace(separatorRegex, '');

  return parseFloat(cleanNumberString);
}
