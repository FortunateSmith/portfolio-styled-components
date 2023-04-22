import styled from "styled-components";

export const ProjectSection = styled.div`
  /* margin: 50px; */
  padding: 160px 0;
  background: #f6ffff;
  display: flex;
  align-items: center;
  

  @media screen {
    display: flex;
    align-items: center;
    padding: none;
    margin: none; 

  }
`;

export const ProjectInfoRow = styled.div`
  display: flex;
  margin: 0 -15 -15 -15;
  flex-wrap: wrap;
  align-items: flex-start;
  /* align-items: baseline; */
  /* flips which side image is on */


  @media screen and (max-width: 768px) {
    margin: 0;

  }
`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 40px;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;

  }
`;

export const ProjectDesc = styled.div`
  display: flex;

`;

export const ProjectTitle = styled.p`
  width: 290px;
  margin-bottom: 35px;
  /* border: solid 2px;
  border-radius: 5%; */
  font-size: 32px;
  line-height: 32px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f6ffff" : "#1a1022")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-left: 17px;
    font-weight: 400;
    text-align: center;
  }
`;


export const ProjectHeading = styled.h1`
  margin-bottom: 24px;
  /* padding-left: 10px; */
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f6ffff" : "#1a1022")};
  text-decoration: underline #1a1022 1px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 64px;
  }
`;