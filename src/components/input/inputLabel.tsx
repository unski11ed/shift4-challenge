import styled from '@emotion/styled';
import React from 'react';

export interface InputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const InputLabel = styled.label(
  ({ theme }) => `
  display: inline-block;
  font-weight: ${theme.components.inputLabel.fontWeight};
  font-size: ${theme.components.inputLabel.fontSize};
  color: ${theme.components.inputLabel.color};
  margin: ${theme.components.inputLabel.margin};
`
);
