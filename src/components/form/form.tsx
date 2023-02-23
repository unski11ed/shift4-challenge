import React, { useState, useCallback, useMemo } from 'react';

import { StylableComponentProps } from '@app/types';

import FormContext from './formContext';

export interface FormProps<TSubmitData> extends StylableComponentProps {
  initialData: Partial<TSubmitData>;
  onSubmit: (data: TSubmitData) => void;
  onChange?: (data: Partial<TSubmitData>) => Partial<TSubmitData>;
  children:
    | React.ReactNode
    | ((props: { values: Partial<TSubmitData> }) => React.ReactNode);
}

export function Form<
  TSubmitData extends { [key: string]: string | number | null } = {}
>({
  children,
  initialData,
  onChange,
  onSubmit,
  ...styleProps
}: FormProps<TSubmitData>) {
  const [formData, setFormData] = useState<Partial<TSubmitData>>(initialData);
  const setFieldValue = useCallback(
    (fieldName: keyof TSubmitData, value: string | number | null) => {
      const updatedData = {
        ...formData,
        [fieldName]: value,
      };
      setFormData(onChange ? onChange(updatedData) : updatedData);
    },
    [formData, onChange]
  );
  const submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();

    onSubmit(formData as TSubmitData);
  };

  return (
    <FormContext.Provider
      value={useMemo(
        () => ({
          data: formData,
          setFieldValue,
        }),
        [setFieldValue, formData]
      )}
    >
      <form onSubmit={submitHandler} {...styleProps}>
        {typeof children === 'function'
          ? children({ values: formData })
          : children}
      </form>
    </FormContext.Provider>
  );
}
