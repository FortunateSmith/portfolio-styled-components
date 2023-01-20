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
    text-align: center;
  }
`;