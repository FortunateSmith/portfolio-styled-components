import styled from "styled-components";

export const FormSection = styled.div`
  color: "#fffbfd";
  padding-top: 120px;
  padding-bottom: 160px;
  height: 100vh;
  background: ${({ lightBg }) => (lightBg ? "#fffbfd" : "#303333")};
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
  border: 3px solid #2cf4ff;
  margin-bottom: 25px;
  background-color: #fffbfd;

  @media screen and (max-width: 480px) {
    width: 90vw;
    font-size: 24px;
  }
`;

export const InputFields = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContactHeader = styled.h1`
  color: #fffbfd;
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 1.1;
  /* color: ${({ lightText }) => (lightText ? "#f6ffff" : "#1a1022")}; */
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 64px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 2px solid #2cf4ff;
  margin: 5px;

  @media screen and (max-width: 480px) {
    width: 80vw;
    font-size: 24px;
  }
`;

export const PopUp = styled.div`
  align-self: center;
  color: #f6ffff;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
  }
`