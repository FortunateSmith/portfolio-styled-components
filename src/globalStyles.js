// Like Main CSS file

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:"Raleway", sans-serif;
    font-weight: 300;
    /* font-style: italic; */
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#1a1022" : "#fffbfd")};
  margin-left: 0% !important;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#fffbfd": "#1a1022")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: solid 2px ${({ primary }) => (primary ? "#fffbfd": "#1a1022")};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    /* background: #fff; */
    background: ${({ primary }) => (primary ?  "#fffbfd" : "#303333")};
    color: ${({ primary }) => (primary ? "#303333" : "#fffbfd")};
    outline: solid 1px #2cf4ff
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    display: flex;
    justify-content: center;
    /* margin: 0 auto !important; */
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto !important;
  }
`;

export default GlobalStyle;
