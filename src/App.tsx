import React from 'react';
import { useTheme, Global, css } from '@emotion/react';

import {
  DefaultLayout,
  DefaultLayoutAppBar,
  DefaultLayoutContent,
  Image,
} from '@app/components';
import Donation from '@app/features/donation';
import CommonErrorBoundary from './features/commonErrorBoundary';

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
      <CommonErrorBoundary>
        <DefaultLayout>
          <DefaultLayoutAppBar>
            <Image src="/images/logo.svg" alt="Natur.ally logo" />
          </DefaultLayoutAppBar>
          <DefaultLayoutContent>
            {/* 
              NOTE: Typically there should be a router here
              rendering pages which render the features.
              As this is not a part of the requirements
              for this excersise I'm rendering the feature directly.
            */}
            <Donation />
          </DefaultLayoutContent>
        </DefaultLayout>
      </CommonErrorBoundary>
    </>
  );
}
