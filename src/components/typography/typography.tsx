import React from 'react';
import styled from '@emotion/styled';

import { StylableComponentProps } from '@app/types';

const StyledH1 = styled.h1(
  ({ theme: { typography } }) => `
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  font-family: ${typography.h1.fontFamily};
  line-height: ${typography.h1.lineHeight};
  margin-bottom: 0.5rem;
  margin-top: 0;
`
);

const StyledSubtitle = styled.p(
  ({ theme: { typography } }) => `
  font-size: ${typography.subtitle.fontSize};
  font-weight: ${typography.subtitle.fontWeight};
  font-family: ${typography.subtitle.fontFamily};
  line-height: ${typography.subtitle.lineHeight};
  margin-top: 0;
  margin-bottom: 1rem;
`
);

const StyledBody = styled.span(
  ({ theme: { typography } }) => `
  font-size: ${typography.body.fontSize};
  font-weight: ${typography.body.fontWeight};
  font-family: ${typography.body.fontFamily};
  line-height: ${typography.body.lineHeight};
`
);

const StyledSmall = styled.span(
  ({ theme: { typography } }) => `
  font-size: ${typography.small.fontSize};
  font-weight: ${typography.small.fontWeight};
  font-family: ${typography.small.fontFamily};
  line-height: ${typography.small.lineHeight};
`
);

export interface TypographyProps extends StylableComponentProps {
  children?: React.ReactNode | string;
  type?: 'body' | 'h1' | 'subtitle' | 'paragraph' | 'small';
}

export const Typography = ({ type, ...childProps }: TypographyProps) => {
  switch (type) {
    case 'h1':
      return <StyledH1 {...childProps} />;
    case 'subtitle':
      return <StyledSubtitle {...childProps} />;
    case 'small':
      return <StyledSmall {...childProps} />;
    case 'body':
    default:
      return <StyledBody {...childProps} />;
  }
};
