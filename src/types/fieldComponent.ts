export default interface FieldComponent<TValue> {
  value: TValue;
  onChange: (value: TValue) => void;
  name: string;
}
