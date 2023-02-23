import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { StylableComponentProps } from '@app/types';
import { Box } from '@app/components';

export interface DefaultLayoutContentProps
  extends PropsWithChildren<StylableComponentProps> {}

export const DefaultLayoutContent = styled(Box)(
  ({ theme }) => `
  padding: ${theme.components.content.padding};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.breakpoints.down('sm')} {
    padding: 0;
  }
`
);
