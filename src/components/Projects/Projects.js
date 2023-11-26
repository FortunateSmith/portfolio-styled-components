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
  ProjectWrapper,
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
          <ProjectWrapper id={id}>
            <ProjectHeading>{headline}</ProjectHeading>
          </ProjectWrapper>
          <ProjectInfoRow>
            {/* project #1 */}
            <InfoColumn>
              <Project>
                <Anchor href="https://ontarioarteducationassociation.org">
                  <ProjectTitle>OAEA</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img2} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description2}</SubTitle>
              </Project>
            </InfoColumn>
            {/* project #2 */}
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
          </ProjectInfoRow>
          <ProjectInfoRow>
            {/* project #3 */}
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
            {/* project #4 */}
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
          </ProjectInfoRow>
        </Fade>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
