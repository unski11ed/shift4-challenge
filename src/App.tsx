import styled from "@emotion/styled";

import "./styles.css";

const TestRect = styled.div`
  width: 80px;
  height: 80px;
  background-color: hotpink;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TestRect />
    </div>
  );
}
