import React from 'react';
import styled from '@emotion/styled';
import { useTheme, Global, css } from '@emotion/react';

const TestRect = styled.div`
  width: 80px;
  height: 80px;
  background-color: hotpink;
`;

export default function App() {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            background: ${theme.palette.background.default};
            color: ${theme.palette.text.default};
            font-family: ${theme.typography.fontFamily.main};
            font-size: ${theme.typography.defaultSize};
            margin: 0;
            padding: 0;
          }
        `}
      />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TestRect />
      </div>
    </>
  );
}
