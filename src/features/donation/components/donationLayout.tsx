/** @jsxRuntime classic */
/** @jsx jsx */
import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { css, withTheme, jsx } from '@emotion/react';

import { StylableComponentProps } from '@app/types';
import { Box } from '@app/components';
import { AppTheme } from '@app/theme';

type CellId =
  | 'value'
  | 'date'
  | 'total'
  | 'summary'
  | 'actionCancel'
  | 'actionProceed';

export interface DonationLayoutCellProps
  extends PropsWithChildren<
    StylableComponentProps & {
      cellId: CellId;
    }
  > {}

type CellStyleParams = { theme: AppTheme };

const cellBase = ({ cellId }: { cellId: CellId }) =>
  css`
    grid-area: ${cellId};
  `;

const cellStyles = {
  actionCancel: ({ theme }: CellStyleParams) => css`
    padding: ${theme.spacing(1)};
    margin-top: ${theme.spacing(2)};

    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `,
  actionProceed: ({ theme }: CellStyleParams) => css`
    padding: ${theme.spacing(1)};
    margin-top: ${theme.spacing(2)};
  `,
};

export const DonationLayoutCell = withTheme(
  ({
    cellId,
    theme,
    ...props
  }: DonationLayoutCellProps & { theme: AppTheme }) => (
    <Box
      css={[
        cellBase({ cellId }),
        cellId in cellStyles &&
          cellStyles[cellId as keyof typeof cellStyles]({ theme }),
      ]}
      {...props}
    />
  )
);

export interface DonationLayoutProps
  extends PropsWithChildren<StylableComponentProps> {}

export const DonationLayout = styled(Box)<DonationLayoutProps>(
  ({ theme }) => `
  padding: ${theme.spacing(4)} ${theme.spacing(5)};
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto auto auto auto;
  gap: ${theme.spacing(2)} ${theme.spacing(2)};
  grid-template-areas:
    'value date'
    'summary summary'
    'summary summary'
    'actionCancel actionProceed';

  ${theme.breakpoints.down('sm')} {
    padding: ${theme.spacing(4)} ${theme.spacing(3)};
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'value'
      'date'
      'summary'
      'actionProceed';
  }

  ${theme.breakpoints.down('xs')} {
    padding: ${theme.spacing(3)} ${theme.spacing(2)};
  }
`
);
