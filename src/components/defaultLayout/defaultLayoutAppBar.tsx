import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { StylableComponentProps } from '@app/types';
import { Box } from '@app/components';

export interface DefaultLayoutAppBarProps
  extends PropsWithChildren<StylableComponentProps> {}

export const DefaultLayoutAppBar = styled(Box)(
  ({ theme }) => `
  flex: 0 0 auto;
  background: ${theme.components.navbar.background};
  padding: ${theme.spacing(3)} ${theme.spacing(5)};
  position: sticky;
  top: 0;

  ${theme.breakpoints.down('sm')} {
    display: none;
  }
`
);
