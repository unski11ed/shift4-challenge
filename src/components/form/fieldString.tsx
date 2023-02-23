import React, { useContext } from 'react';

import FormContext from './formContext';
import { FieldProps } from './types';

export default function FieldString({ children, name }: FieldProps<string>) {
  const { data, setFieldValue } = useContext(FormContext);

  return (
    <>
      {children(
        {
          value: (data[name] as string | undefined) || '',
          onChange: (value) => setFieldValue(name, value),
          name,
        },
        data
      )}
    </>
  );
}
