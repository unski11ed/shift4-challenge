import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import { StylableComponentProps } from '@app/types';
import {
  Paper,
  Button,
  InputCurrency,
  InputMonth,
  InputLabel,
  Form,
  FieldNumber,
  FieldString,
  Alert,
  Typography,
} from '@app/components';

import {
  DonationLayout,
  DonationLayoutCell,
  Banner,
  DonationSummary,
  CloseButton,
} from './components';
import { DonationPayload } from './types';

const ActionButton = styled(Button)`
  width: 100%;
`;

const PapeWrap = styled(Paper)(
  ({ theme }) => `
  border-radius: 5px;
  overflow: hidden;
  max-width: 600px;
  position: relative;

  ${theme.breakpoints.down('sm')} {
    border-radius: 0;
    min-height: 100vh;
    width: 100%;
  }
`
);

export interface DonationProps extends StylableComponentProps {}

export const Donation = (props: DonationProps) => {
  const submitHandler = (values: DonationPayload) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const nextMonthDate = useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const initialData = useMemo(
    () => ({
      amount: null,
      until: nextMonthDate.toISOString(),
    }),
    [nextMonthDate]
  );

  const isDataValid = ({ amount, until }: Partial<DonationPayload>) =>
    (amount ?? 0) > 0 && until;

  return (
    <PapeWrap {...props} layer={4}>
      <CloseButton />

      <Banner />

      <Form<DonationPayload> initialData={initialData} onSubmit={submitHandler}>
        {({ values }) => (
          <DonationLayout>
            <DonationLayoutCell cellId="value">
              <InputLabel htmlFor="donation-value">I can donate</InputLabel>
              <FieldNumber name="amount">
                {(fieldProps) => (
                  <InputCurrency
                    {...fieldProps}
                    max={1000000}
                    id="donation-value"
                  />
                )}
              </FieldNumber>
            </DonationLayoutCell>
            <DonationLayoutCell cellId="date">
              <InputLabel htmlFor="donation-time">Every month until</InputLabel>
              <FieldString name="until">
                {(fieldProps) => (
                  <InputMonth
                    {...fieldProps}
                    id="donation-time"
                    minDate={nextMonthDate}
                  />
                )}
              </FieldString>
            </DonationLayoutCell>

            <DonationLayoutCell cellId="summary">
              {isDataValid(values) ? (
                <DonationSummary donation={values as DonationPayload} />
              ) : (
                <Alert>
                  <Typography type="small">
                    Please fill the values above to get a donation summary, and
                    proceed.
                  </Typography>
                </Alert>
              )}
            </DonationLayoutCell>

            <DonationLayoutCell cellId="actionCancel">
              <ActionButton outline>Cancel</ActionButton>
            </DonationLayoutCell>
            <DonationLayoutCell cellId="actionProceed">
              <ActionButton type="submit" disabled={!isDataValid(values)}>
                Continue
              </ActionButton>
            </DonationLayoutCell>
          </DonationLayout>
        )}
      </Form>
    </PapeWrap>
  );
};
