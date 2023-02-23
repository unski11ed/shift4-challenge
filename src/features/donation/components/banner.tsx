import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Box, Image, Typography } from '@app/components';
import { StylableComponentProps } from '@app/types';

const BannerWrap = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.salmon.main};
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  display: flex;
  align-items: center;

  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacing(3)};
  }
`
);

const BannerTextWrap = styled(Box)(
  ({ theme }) => `
  flex: 1 1 auto;
  margin-left: ${theme.spacing(3.5)};
  color: ${theme.palette.purple.gray};

  ${theme.breakpoints.down('sm')} {
    margin-top: ${theme.spacing(3)};
    margin-left: 0;
  }

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

export const Banner = (props: BannerProps) => {
  const { t } = useTranslation('donation');

  return (
    <BannerWrap {...props}>
      <BannerImage
        src="/images/donation.svg"
        alt="People with a single heart"
      />
      <BannerTextWrap>
        <BannerHeading type="h1">{t('banner.title')}</BannerHeading>
        <Typography type="subtitle">{t('banner.subtitle')}</Typography>
      </BannerTextWrap>
    </BannerWrap>
  );
};
