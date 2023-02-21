import React from 'react';

import styled from '@emotion/styled';

export interface UnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = styled.button`
  background: none;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const UnstyledButton = ({
  type,
  ...buttonProps
}: UnstyledButtonProps) => <Button type={type ?? 'button'} {...buttonProps} />;
