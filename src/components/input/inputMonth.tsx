import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { StylableComponentProps } from '@app/types';
import formatDate from '@app/utils/formatDate';
import { Box } from '../box';
import { UnstyledButton } from '../unstyledButton';
import { Image } from '../image';
import { Typography } from '../typography';

const InputWrap = styled(Box)(
  ({
    theme: {
      components: { input: inputTheme },
    },
  }) => `
  display: flex;
  align-items: stretch;
  border: ${inputTheme.borderWidth} solid ${inputTheme.borderColor};
  border-radius: ${inputTheme.radius};
  height: ${inputTheme.height};
  overflow: hidden;
`
);

const ButtonWrap = styled(Box)(
  ({ theme }) => `
  flex: 0 0 auto;
  padding-left: ${theme.spacing(1.5)};
  padding-right: ${theme.spacing(2)};
  display: inline-flex;
  align-items: center;
`
);

const SelectorButton = styled(UnstyledButton)(
  ({ theme }) => `
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  :hover {
    background-color: ${theme.palette.purple.lightest};
  }

  :active {
    background-color: ${theme.palette.purple.lighter};
  }
`
);

const TypographyMonth = styled(Typography)(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily.alt2};
  font-size: 16px;
  line-height: 1.25em;
  font-weight: ${theme.typography.fontWeight.medium};
`
);

const DateWrap = styled(Box)(
  () => `
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
);

const toBeginningOfMonth = (date: Date) => {
  const updatedDate = new Date(date);
  updatedDate.setDate(1);
  updatedDate.setHours(0, 0, 0, 0);
  return updatedDate;
};

const fixDateRange = (date: Date, min?: string | Date, max?: string | Date) => {
  const maxDate = max
    ? toBeginningOfMonth(typeof max === 'string' ? new Date(max) : max)
    : null;
  const minDate = min
    ? toBeginningOfMonth(typeof min === 'string' ? new Date(min) : min)
    : null;

  let fixedDate = new Date(date);
  if (minDate && fixedDate < minDate) {
    fixedDate = new Date(minDate);
  }
  if (maxDate && fixedDate > maxDate) {
    fixedDate = new Date(maxDate);
  }
  return fixedDate;
};

export interface InputMonthProps extends StylableComponentProps {
  value: string;
  onChange: (value: string) => void;
  minDate?: string | Date;
  maxDate?: string | Date;
  format?: (date: Date) => string;
}

export const InputMonth = ({
  value,
  onChange,
  minDate,
  maxDate,
  format,
  ...styleProps
}: InputMonthProps) => {
  const { t } = useTranslation('common');
  const formatter = format ?? formatDate;
  const selectedDate = fixDateRange(
    toBeginningOfMonth(new Date((value || minDate) ?? '')),
    minDate,
    maxDate
  );

  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();
  const monthName = selectedDate.toLocaleString('en-US', { month: 'long' });

  const prevMonthHandler = () => {
    const prevDate = new Date(selectedYear, selectedMonth - 1);

    onChange(formatter(fixDateRange(prevDate, minDate, maxDate)));
  };

  const nextMonthHandler = () => {
    const nextDate = new Date(selectedYear, selectedMonth + 1);

    onChange(formatter(fixDateRange(nextDate, minDate, maxDate)));
  };

  return (
    <InputWrap {...styleProps} data-testid="input-month">
      <ButtonWrap>
        <SelectorButton
          onClick={prevMonthHandler}
          aria-label={t('inputMonth.actionPrev')}
        >
          <Image
            src="/icons/chevron-left.svg"
            alt={t('imageAlts.iconLeftArrow')}
          />
        </SelectorButton>
      </ButtonWrap>
      <DateWrap>
        <TypographyMonth>{monthName}</TypographyMonth>
        <Typography type="small">{selectedYear}</Typography>
      </DateWrap>
      <ButtonWrap>
        <SelectorButton
          onClick={nextMonthHandler}
          aria-label={t('inputMonth.actionNext')}
        >
          <Image
            src="/icons/chevron-right.svg"
            alt={t('imageAlts.iconRightArrow')}
          />
        </SelectorButton>
      </ButtonWrap>
    </InputWrap>
  );
};
