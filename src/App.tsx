import React from 'react';
import { useTheme, Global, css } from '@emotion/react';

import {
  DefaultLayout,
  DefaultLayoutAppBar,
  DefaultLayoutContent,
  Image,
} from '@app/components';
import Donation from '@app/features/donation';

export default function App() {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background: ${theme.palette.background.default};
            color: ${theme.typography.body.color};
            font-family: ${theme.typography.body.fontFamily};
            font-size: ${theme.typography.body.fontSize};
            line-height: ${theme.typography.body.lineHeight};
            font-weight: ${theme.typography.body.fontWeight};
            margin: 0;
            padding: 0;
          }
        `}
      />
      <DefaultLayout>
        <DefaultLayoutAppBar>
          <Image src="/images/logo.svg" alt="Natur.ally logo" />
        </DefaultLayoutAppBar>
        <DefaultLayoutContent>
          <Donation />
        </DefaultLayoutContent>
      </DefaultLayout>
    </>
  );
}
