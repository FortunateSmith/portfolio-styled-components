// Like Main CSS file

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
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
  background: ${({ primary }) => (primary ? "#000" : "#abf6e8")};

  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#abf6e8" : "#101522")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: solid 2px ${({ primary }) => (primary ? "#abf6e8" : "#101522")};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-out;
    /* background: #fff; */
    background: ${({ primary }) => (primary ? "#abf6e8" : "#101522")};
    color: ${({ primary }) => (primary ? "#101522" : "#abf6e8")};
    outline: solid 2px ${({ primary }) => (primary ? "#101522" : "#abf6e8")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
