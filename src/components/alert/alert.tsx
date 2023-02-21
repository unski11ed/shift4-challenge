import { StylableComponentProps } from '@app/types';
import styled from '@emotion/styled';
/** @jsxRuntime classic */
/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { css, withTheme, jsx } from '@emotion/react';

import { AppTheme } from '@app/theme';

import { Box } from '../box';

export interface AlertProps extends PropsWithChildren<StylableComponentProps> {
  type?: 'default';
}

type TypeStyleProps = { theme: AppTheme };

const AlertWrap = styled(Box)(
  ({ theme }) => `
  border-radius: ${theme.components.alert.radius};
  padding: ${theme.components.alert.padding};
`
);

const alertTypeStyles = {
  default: ({ theme }: TypeStyleProps) => css`
    color: ${theme.components.alert.default.color};
    background-color: ${theme.components.alert.default.backgroundColor};
  `,
};

export const Alert = withTheme(
  ({ type, theme, ...props }: AlertProps & { theme: AppTheme }) => (
    <AlertWrap {...props} css={alertTypeStyles[type ?? 'default']({ theme })} />
  )
);
