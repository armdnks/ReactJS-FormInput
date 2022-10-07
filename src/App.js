import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  CheckBox,
  FormAdvanced,
  FormBasic,
  MultiCheckBox,
} from "./pages";

import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <h1 className="app-main-title">React Form</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-basic" element={<FormBasic />} />
          <Route path="/form-advanced" element={<FormAdvanced />} />
          <Route path="/checkbox" element={<CheckBox />} />
          <Route path="/multiple-checkbox" element={<MultiCheckBox />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
  /* max-width: 400px; */
  /* min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */

  .app-main-title {
    font-size: 3rem;
  }
`;

export default App;
