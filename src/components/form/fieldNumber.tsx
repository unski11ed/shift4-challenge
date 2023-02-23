import React, { useContext } from 'react';

import FormContext from './formContext';
import { FieldProps } from './types';

export default function FieldNumber({
  children,
  name,
}: FieldProps<number | null>) {
  const { data, setFieldValue } = useContext(FormContext);

  return (
    <>
      {children(
        {
          value: (data[name] as number | null) ?? null,
          onChange: (value) => setFieldValue(name, value),
          name,
        },
        data
      )}
    </>
  );
}
