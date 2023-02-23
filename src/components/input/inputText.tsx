import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { StylableComponentProps } from '@app/types';
import { Box, BoxProps } from '../box';
import { InputAdormentProps } from './inputAdorment';

const InputWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'focused',
})<BoxProps & { focused?: boolean }>(
  ({
    theme: {
      components: { input: inputTheme },
    },
    focused,
  }) => `
  display: flex;
  align-items: stretch;
  border: ${inputTheme.borderWidth} solid ${inputTheme.borderColor};
  border-radius: ${inputTheme.radius};
  height: ${inputTheme.height};
  ${focused ? `border-color: ${inputTheme.borderColorActive};` : ''}
  overflow: hidden;
`
);

const StyledInput = styled.input(
  ({
    theme: {
      components: { input: inputTheme },
    },
  }) => `
  color: ${inputTheme.color};
  font-family: ${inputTheme.fontFamily};
  font-size: ${inputTheme.fontSize};
  border: none;

  :placeholder {
    color: ${inputTheme.colorPlaceholder};
  }

  :focus {
    border: none;
    outline: none;
  }
`
);

export interface InputTextProps
  extends StylableComponentProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'name' | 'value' | 'onChange' | 'type'
    > {
  onChange: (value: string) => void;
  value: string;
  name?: string;
  type?: 'text' | 'number';
  adorment?: React.ReactElement<InputAdormentProps>;
}

export const InputText = ({
  onChange,
  type,
  adorment,
  ...inputProps
}: InputTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  };

  return (
    <InputWrap
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      focused={isFocused}
    >
      {adorment &&
        React.cloneElement(React.Children.only(adorment), {
          onClick: () => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          },
        })}
      <StyledInput
        ref={inputRef}
        type={type || 'text'}
        onChange={changeHandler}
        {...inputProps}
      />
    </InputWrap>
  );
};
