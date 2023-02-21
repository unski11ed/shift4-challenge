import React from 'react';
import styled from '@emotion/styled';

import { Box, Image, Typography } from '@app/components';
import { StylableComponentProps } from '@app/types';

const BannerWrap = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.salmon.main};
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  display: flex;
  align-items: center;
`
);

const BannerTextWrap = styled(Box)(
  ({ theme }) => `
  flex: 1 1 auto;
  margin-left: ${theme.spacing(3.5)};
  color: ${theme.palette.purple.gray};
  > * {
    margin-bottom: 0 !important;
  }
`
);

const BannerImage = styled(Image)`
  flex: 0 0 auto;
`;

const BannerHeading = styled(Typography)`
  color: ${({ theme }) => theme.palette.purple.midnight};
`;

export interface BannerProps extends StylableComponentProps {}

export const Banner = (props: BannerProps) => (
  <BannerWrap {...props}>
    <BannerImage src="/images/donation.svg" alt="People with a single heart" />
    <BannerTextWrap>
      <BannerHeading type="h1">The giving block</BannerHeading>
      <Typography type="subtitle">Set up your donation goal</Typography>
    </BannerTextWrap>
  </BannerWrap>
);
