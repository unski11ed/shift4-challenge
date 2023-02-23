import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

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

export const CloseButton = (props: CloseButtonProps) => {
  const { t } = useTranslation('donation');

  return (
    <Button aria-label={t('actions.close')} {...props}>
      <Image src="/icons/cross.svg" alt={t('imageAlts.iconCros')} />
    </Button>
  );
};
