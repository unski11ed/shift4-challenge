import React from 'react';
import styled from '@emotion/styled';
import { Trans, useTranslation } from 'react-i18next';

import { StylableComponentProps } from '@app/types';
import { Alert, Box, Typography } from '@app/components';
import formatCurrency from '@app/utils/formatCurrency';
import formatMonth from '@app/utils/formatMonth';

import { DonationPayload } from '../types';

const diffMonths = (dateA: Date, dateB: Date) =>
  (dateB.getFullYear() - dateA.getFullYear()) * 12 +
  (dateB.getMonth() - dateA.getMonth());

const formatCurrencyRounded = (value: number) => {
  if (value >= 100000000000) {
    return `${formatCurrency(value / 1000000000)}B`;
  }
  if (value >= 100000000) {
    return `${formatCurrency(value / 1000000)}M`;
  }
  if (value >= 1000000) {
    return `${formatCurrency(value / 1000)}K`;
  }
  return formatCurrency(value);
};

const DonationWrap = styled(Box)(
  ({ theme }) => `
    margin-top: ${theme.spacing(3)};

    ${theme.breakpoints.down('sm')} {
      border: 1px solid ${theme.separator.color};
      border-radius: 4px;
    }
  `
);

const TotalWrap = styled(Box)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(3)};
  padding: 0 ${theme.spacing(2)};

  ${theme.breakpoints.down('sm')} {
    padding: ${theme.spacing(3)} ${theme.spacing(2)};
    margin: 0;
  }
`
);

const LabelTypography = styled(Typography)(
  ({ theme }) => `
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: 20px;
  line-height: 1.2em;
  color: ${theme.palette.gray.dark};
`
);

const ValueTypography = styled(Typography)(
  ({ theme }) => `
  font-weight: ${theme.typography.fontWeight.bold};
  font-family: ${theme.typography.fontFamily.alt};
  font-size: 32px;
  line-height: 1.2em;
`
);

export interface DonationSummaryProps extends StylableComponentProps {
  donation: DonationPayload;
}

export const DonationSummary = ({ donation }: DonationSummaryProps) => {
  const amountFormatted = formatCurrency(donation.amount as number);
  const dateFormatted = formatMonth(new Date(donation.until));
  const { t } = useTranslation('donation');

  return (
    <DonationWrap data-testid="donation-summary">
      <TotalWrap>
        <LabelTypography>{t('summary.labelTotal')}</LabelTypography>
        <ValueTypography>
          {formatCurrencyRounded(
            Math.ceil(diffMonths(new Date(), new Date(donation.until))) *
              (donation.amount as number)
          )}
        </ValueTypography>
      </TotalWrap>
      <Alert type="default" data-testid="donation-summary-info">
        <Typography type="small">
          <Trans
            ns="donation"
            i18nKey="summary.info"
            amountFormatted={amountFormatted}
            dateFormatted={dateFormatted}
          >
            You will be sending <strong>{{ amountFormatted }}</strong> every
            month until <strong>{{ dateFormatted }}</strong>. Thank you!
          </Trans>
        </Typography>
      </Alert>
    </DonationWrap>
  );
};
