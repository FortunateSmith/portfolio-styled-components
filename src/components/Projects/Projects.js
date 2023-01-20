import React from "react";
import { Container } from "../../globalStyles";
import { Fade } from "react-reveal";
import {
  Heading,
  ImageWrapper,
  Img,
  InfoColumn,
  TextWrapper,
  SubTitle,
} from "../InfoSection/InfoSection.elements";
import {
  ProjectSection,
  ProjectInfoRow,
  Project,
  ProjectTitle,
} from "./Projects.elements";

const Projects = ({
  img,
  img2,
  img3,
  img4,
  headline,
  description,
  description2,
  description3,
  description4,
  id,
}) => {
  return (
    <ProjectSection>
      <Container >
        <Fade>
          <TextWrapper id={id}>
            <Heading>{headline}</Heading>
          </TextWrapper>
          <ProjectInfoRow>
            <InfoColumn>
              <Project>
                <ProjectTitle>Tool Swap</ProjectTitle>
                <ImageWrapper>
                  <Img src={img} />
                </ImageWrapper>
                <SubTitle>{description}</SubTitle>
              </Project>
            </InfoColumn>
            <InfoColumn>
              <Project>
                <ProjectTitle>Scheduler</ProjectTitle>
                <ImageWrapper>
                  <Img src={img2} />
                </ImageWrapper>
                <SubTitle>{description2}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InfoColumn>
              <Project>
                <ProjectTitle>Tweeter</ProjectTitle>
                <ImageWrapper>
                  <Img src={img3} />
                </ImageWrapper>
                <SubTitle>{description3}</SubTitle>
              </Project>
            </InfoColumn>
            <InfoColumn>
              <Project>
                <ProjectTitle>Tiny App</ProjectTitle>
                <ImageWrapper>
                  <Img src={img4} />
                </ImageWrapper>
                <SubTitle>{description4}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>
        </Fade>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
