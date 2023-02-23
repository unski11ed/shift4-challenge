import { FieldComponentProps } from '@app/types';

export interface FieldProps<TValue> {
  name: string;
  children: (
    props: FieldComponentProps<TValue>,
    fieldsData: { [field: string]: string | number | null | undefined }
  ) => React.ReactNode;
}
