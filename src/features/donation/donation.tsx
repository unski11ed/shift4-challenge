import React from 'react';
import styled from '@emotion/styled';

import { StylableComponentProps } from '@app/types';
import { Alert, Paper, Typography, Button } from '@app/components';

import { DonationLayout, DonationLayoutCell, Banner } from './components';

const ActionButton = styled(Button)`
  width: 100%;
`;

export interface DonationProps extends StylableComponentProps {}

export const Donation = (props: DonationProps) => {
  return (
    <Paper {...props} layer={4}>
      <Banner />
      <DonationLayout>
        <DonationLayoutCell cellId="value">Value</DonationLayoutCell>
        <DonationLayoutCell cellId="date">Date</DonationLayoutCell>

        <DonationLayoutCell cellId="summary">
          <Alert type="default">
            <Typography type="small">
              You will be sending <strong>$25,000</strong> every month until{' '}
              <strong>August 2023</strong>. Thank you!
            </Typography>
          </Alert>
        </DonationLayoutCell>

        <DonationLayoutCell cellId="actionCancel">
          <ActionButton outline>Cancel</ActionButton>
        </DonationLayoutCell>
        <DonationLayoutCell cellId="actionProceed">
          <ActionButton>Continue</ActionButton>
        </DonationLayoutCell>
      </DonationLayout>
    </Paper>
  );
};
