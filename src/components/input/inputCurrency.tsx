import React, { useState } from 'react';

import formatCurrencyDecimal from '@app/utils/formatCurrencyDecimal';
import parseCurrency from '@app/utils/parseCurrency';

import { InputAdorment } from './inputAdorment';
import { InputText, InputTextProps } from './inputText';
import { Image } from '../image';

const excludeNonNumeric = (input: string) => input.replace(/[^0-9.]/g, '');

const cutDecimalPlaces = (input: string) => {
  const matches = input.match(/[0-9]+.[0-9]{0,2}/);

  return matches ? matches[0] : input;
};

export interface InputCurrencyProps
  extends Omit<InputTextProps, 'type' | 'min' | 'max' | 'value' | 'onChange'> {
  min?: number;
  max?: number;
  value: number | null;
  onChange: (value: number) => void;
}

export const InputCurrency = ({
  min,
  max,
  value,
  onBlur,
  onChange,
  ...props
}: InputCurrencyProps) => {
  if (typeof min !== 'undefined' && min < 0) {
    throw new TypeError("min currency value can't be < 0");
  }
  const [strValue, setStrValue] = useState(
    value !== null ? formatCurrencyDecimal(value) : ''
  );

  const blurHandler = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (strValue) {
      let numberVal = parseCurrency(strValue);
      numberVal = min && numberVal < min ? min : numberVal;
      numberVal = max && numberVal > max ? max : numberVal;

      if (!Number.isNaN(numberVal)) {
        setStrValue(formatCurrencyDecimal(numberVal * 100));

        onChange(numberVal * 100);
      }
    }
    if (onBlur) {
      onBlur(ev);
    }
  };

  const changeHandler = (currentValue: string) => {
    setStrValue(cutDecimalPlaces(excludeNonNumeric(currentValue)));
  };

  return (
    <InputText
      {...props}
      inputMode="numeric"
      onBlur={blurHandler}
      value={strValue}
      onChange={changeHandler}
      placeholder="0.00"
      adorment={
        <InputAdorment>
          <Image src="/icons/dollar.svg" alt="Dollar symbol" />
        </InputAdorment>
      }
    />
  );
};
