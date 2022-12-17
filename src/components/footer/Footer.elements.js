import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Foot = styled.div`
  background: #f6effc00;
  height: 80px;
  position: sticky;
  bottom: 0;
  /* opacity: 0.8; */
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  padding: 0 5%;
  width: 90%;
  background: #f6effc00;
`

export const FooterIconBox = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
  opacity: 1;
`