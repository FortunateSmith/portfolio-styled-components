import React from "react";
import { Container } from "../../globalStyles";
import { Fade } from "react-reveal";
import {
  ImageWrapper,
  Img,
  InfoColumn,
  TextWrapper,
  SubTitle,
  Anchor,
} from "../InfoSection/InfoSection.elements";
import {
  ProjectSection,
  ProjectInfoRow,
  Project,
  ProjectTitle,
  ProjectHeading,
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
      <Container>
        <Fade>
          <TextWrapper id={id}>
            <ProjectHeading>{headline}</ProjectHeading>
          </TextWrapper>
          <ProjectInfoRow>
            <InfoColumn>
              <Project>
                <Anchor href="https://studiopothos.com">
                  <ProjectTitle>Studio Pothos</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img3} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description3}</SubTitle>
              </Project>
            </InfoColumn>
            <InfoColumn>
              <Project>
                <Anchor href="https://confectionsbymilon-backt.ca">
                  <ProjectTitle>Confections by Milon Backt</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img4} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description4}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>
          <ProjectInfoRow>
            <InfoColumn>
              <Project>
                <Anchor href="https://github.com/FortunateSmith/ToolSwap">
                  <ProjectTitle>Tool Swap</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description}</SubTitle>
              </Project>
            </InfoColumn>
            <InfoColumn>
              <Project>
                <Anchor href="https://github.com/FortunateSmith/scheduler">
                  <ProjectTitle>Scheduler</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img2} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description2}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>
        </Fade>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
