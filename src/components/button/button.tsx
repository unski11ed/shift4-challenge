import { AppTheme } from '@app/theme';
import styled from '@emotion/styled';

import { UnstyledButtonProps, UnstyledButton } from '../unstyledButton';

const applyButtonStyle = (
  theme: AppTheme,
  type: 'primary',
  outline?: boolean
) => {
  const targetStyle =
    theme.components.button.styles[type][outline ? 'outline' : 'filled'];
  return `
    background: ${targetStyle.default.backgroundColor ?? 'none'};
    color: ${targetStyle.color ?? 'inherit'};
    border: 1px solid ${targetStyle.default.borderColor};

    &:hover {
      background: ${targetStyle.hover.backgroundColor ?? 'inherit'};
      border-color: ${targetStyle.hover.borderColor ?? 'inherit'};
    }
    &:active {
      background: ${targetStyle.pressed.backgroundColor ?? 'inherit'};
      border-color: ${targetStyle.pressed.borderColor ?? 'inherit'};
    }
  `;
};

export interface ButtonProps extends UnstyledButtonProps {
  color?: 'primary';
  outline?: boolean;
}

export const Button = styled(UnstyledButton)<ButtonProps>(
  ({ theme, color, outline }) => `
  padding: ${theme.components.button.padding};
  border-radius: ${theme.components.button.radius};
  font-size: ${theme.components.button.fontSize};
  font-weight: ${theme.components.button.fontWeight};

  ${applyButtonStyle(theme, color ?? 'primary', outline)}
`
);
