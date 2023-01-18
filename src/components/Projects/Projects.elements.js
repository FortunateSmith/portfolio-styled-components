import styled from "styled-components";

export const ProjectSection = styled.div`
  margin: 50px;
  padding: 80px;

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
`;

export const ProjectDesc = styled.div`

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