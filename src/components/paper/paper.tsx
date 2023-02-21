import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { AppTheme } from '@app/theme';
import { StylableComponentProps } from '@app/types';
import { Box } from '../box';

export interface PaperProps extends PropsWithChildren<StylableComponentProps> {
  layer?: keyof AppTheme['shadows'];
}

export const Paper = styled(Box)<PaperProps>(
  ({ theme, layer }) => `
  background: ${theme.components.paper.background};
  box-shadow: ${(layer && theme.shadows[layer]) ?? 'none'}
`
);
