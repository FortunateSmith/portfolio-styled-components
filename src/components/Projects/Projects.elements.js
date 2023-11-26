import styled from "styled-components";
import { fadeAnimation } from "../InfoSection/InfoSection.elements";

export const ProjectSection = styled.div`
  /* margin: 50px; */
  padding: 40px 0;
  background: #fffbfd;
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
    /* padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 40px; */
    padding: 40px;

    @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 20px;
    padding-bottom: 20px;

  }
`;

export const ProjectWrapper = styled.div`
max-width: 540px;
padding: 60px 20px 20px 40px;
animation: ${fadeAnimation} 1s ease-in;

@media screen and (max-width: 768px) {
  /* height: 80vh; */
  padding-bottom: 65px;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
`;

export const ProjectDesc = styled.div`
  display: flex;
`;

export const ProjectTitle = styled.p`
  width: 100%;
  /* inline-size: min-content;  */
  white-space: nowrap;
  margin-bottom: 35px;
  font-size: 32px;
  line-height: 32px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#fffbfd" : "#1a1022")};

  @media screen and (max-width: 1120px) {
    white-space: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    /* margin-left: 17px; */
    white-space: normal;
    font-weight: bold;
    text-align: center;
  }
`;


export const ProjectHeading = styled.h2`
  margin-bottom: 24px;
  padding-left: 15px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#fffbfd" : "#1a1022")};
  text-decoration: underline #1a1022 1px;


  @media screen and (max-width: 840px) {
    padding-left: 9px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 64px;
    /* padding-left: 9px; */
  }
`;