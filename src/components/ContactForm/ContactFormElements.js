import styled from "styled-components";

export const FormSection = styled.div`
  color: "#fefeff";
  padding: 160px 0;
  height: 100vh;
  background: ${({ lightBg }) => (lightBg ? "#fefeff" : "#333034")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 5em;
  }
`;

export const Form = styled.form`
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TextSubmit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
`;

export const TextArea = styled.textarea`
  padding: 1em;
  width: 100%;
  height: 296px;
  max-width: 372px;
  border-radius: 8px;
`;

export const InputFields = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContactHeader = styled.h1`
  color: #fefeff;
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 1.1;
  /* color: ${({ lightText }) => (lightText ? "#fefeff" : "#1a1022")}; */
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 64px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
`;

export const PopUp = styled.div`
  align-self: center;
  color: #fefeff
`