import styled from '@emotion/styled';

import { Box, BoxProps } from '../box';

export interface InputAdormentProps extends BoxProps {}

export const InputAdorment = styled(Box)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(1)}
`
);
