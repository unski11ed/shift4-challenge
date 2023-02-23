import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@app/utils/tests';

import { Donation } from '../donation';

describe('Donation Feature', () => {
  it('should render the feature', () => {
    const { queryByTestId } = renderWithProviders(<Donation />);

    expect(queryByTestId('feature-donation')).toBeInTheDocument();
  });

  it('should disable the continue button when no value is provided', async () => {
    const { getByRole } = renderWithProviders(<Donation />);

    expect(
      (getByRole('button', { name: 'actions.continue' }) as HTMLButtonElement)
        .disabled
    ).toBe(true);
  });

  it('should not disable the continue button when no value is provided', async () => {
    const { getByRole, getByLabelText } = renderWithProviders(<Donation />);

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: '1289' },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(
      (getByRole('button', { name: 'actions.continue' }) as HTMLButtonElement)
        .disabled
    ).toBe(false);
  });

  it('should call the submit handler with proper data, when amount is provided and next month is clicked', async () => {
    const VALUE = 1289;
    const expectedDate = new Date();
    // One click - so it should be two months ahead
    expectedDate.setMonth(expectedDate.getMonth() + 2, 1);
    const expectedValueCents = VALUE * 100;
    const expectedDateStr = expectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const submitHandler = jest.fn();
    const { getByRole, getByLabelText, getByTestId } = renderWithProviders(
      <Donation onSubmit={submitHandler} />
    );

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    await userEvent.click(
      within(getByTestId('input-month')).getByRole('button', {
        name: 'inputMonth.actionNext',
      })
    );

    await userEvent.click(
      getByRole('button', {
        name: 'actions.continue',
      })
    );

    expect(submitHandler).toHaveBeenCalledWith({
      amount: expectedValueCents,
      until: expectedDateStr,
    });
  });

  it('should obey edge values - "amount" needs to be <= 1M and "until" should be at least next month', async () => {
    const VALUE = 1299999;
    const VALUE_MAX = 1000000;
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 1, 1);
    const expectedValueCents = VALUE_MAX * 100;
    const expectedDateStr = expectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const submitHandler = jest.fn();
    const { getByRole, getByLabelText, getByTestId } = renderWithProviders(
      <Donation onSubmit={submitHandler} />
    );

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    // Click previous month
    await userEvent.click(
      within(getByTestId('input-month')).getByRole('button', {
        name: 'inputMonth.actionPrev',
      })
    );

    await userEvent.click(
      getByRole('button', {
        name: 'actions.continue',
      })
    );

    expect(submitHandler).toHaveBeenCalledWith({
      amount: expectedValueCents,
      until: expectedDateStr,
    });
  });

  it('should display the total amount properly in case of >=100Ks', async () => {
    const VALUE = 120120;

    const submitHandler = jest.fn();
    const { getByLabelText, getByTestId } = renderWithProviders(
      <Donation onSubmit={submitHandler} />
    );

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(
      within(getByTestId('donation-summary')).queryByText('$120.12K')
    ).toBeInTheDocument();
  });

  it('should display the total amount properly in case of >=1Ms', async () => {
    const VALUE = 1000000;

    const { getByLabelText, getByTestId } = renderWithProviders(<Donation />);

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(
      within(getByTestId('donation-summary')).getByText('$1.00M')
    ).toBeInTheDocument();
  });

  it('should display the placeholder info box when amount is missing', async () => {
    const { queryByText } = renderWithProviders(<Donation />);

    expect(queryByText('summary.placeholder')).toBeInTheDocument();
  });

  it('should display the placeholder info box when value is 0', async () => {
    const { queryByText, getByLabelText } = renderWithProviders(<Donation />);

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: 0 },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(queryByText('summary.placeholder')).toBeInTheDocument();
  });

  it('should display the summary text properly when value is provided', async () => {
    const VALUE = 1234;
    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1, 1);
    const expectedDateString = nextMonthDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });

    const { getByTestId, getByLabelText } = renderWithProviders(<Donation />);

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(
      within(getByTestId('donation-summary-info')).queryByText('$1,234.00')
    ).toBeInTheDocument();
    expect(
      within(getByTestId('donation-summary-info')).queryByText(
        expectedDateString
      )
    ).toBeInTheDocument();
  });

  it('should reformat the amount in the input properly', async () => {
    const VALUE = 234567.8999;
    const EXPECTED = `234,567.89`;

    const { getByLabelText } = renderWithProviders(<Donation />);

    fireEvent.change(getByLabelText('fields.labelValue'), {
      target: { value: VALUE },
    });
    fireEvent.blur(getByLabelText('fields.labelValue'));

    expect(getByLabelText('fields.labelValue')).toHaveDisplayValue(EXPECTED);
  });
});
