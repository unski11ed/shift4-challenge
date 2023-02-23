import React from 'react';
import styled from '@emotion/styled';

import { UnstyledButton, UnstyledButtonProps, Image } from '@app/components';

const Button = styled(UnstyledButton)(
  ({ theme }) => `
  position: absolute;
  right: ${theme.spacing(3)};
  top: ${theme.spacing(2)};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${theme.breakpoints.up('sm')} {
    display: none;
  }
`
);

export interface CloseButtonProps extends UnstyledButtonProps {}

export const CloseButton = (props: CloseButtonProps) => (
  <Button aria-label="Close" {...props}>
    <Image src="/icons/cross.svg" alt="Cross icon" />
  </Button>
);
