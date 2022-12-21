import styled from "styled-components";
// import { Container } from "../../globalStyles";

export const Foot = styled.div`
  background: ${({bgColor}) => (bgColor ? "#1a1022" : "#f6effc")} ;
  height: 80px;
  /* position: sticky;
  bottom: 0; */

  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({textColor}) => (textColor ? "#f6effc" : "#1a1022")};
  justify-content: space-between;
  padding: 0 5%;
  width: 90%;

`

export const FooterIconBox = styled.div`
  color: ${({textColor}) => (textColor ? "#f6effc" : "#1a1022")};
  display: flex;
  justify-content: flex-end;
  opacity: 1;
`