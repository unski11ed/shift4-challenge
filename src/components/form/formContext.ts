import { createContext } from 'react';

export interface FormContextProps {
  data: { [field: string]: string | number | null | undefined };
  setFieldValue: (fieldName: string, value: string | number | null) => void;
}

const FormContext = createContext<FormContextProps>({
  data: {},
  setFieldValue() {
    throw new TypeError('Unimplemented context method');
  },
});

export default FormContext;
