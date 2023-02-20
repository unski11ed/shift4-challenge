import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { StylableComponentProps } from '@app/types';
import { Box } from '@app/components';

export interface DefaultLayoutProps
  extends PropsWithChildren<StylableComponentProps> {}

export const DefaultLayout = styled(Box)``;
