import React from "react";
import { Container } from "../../globalStyles";
import { Fade } from "react-reveal";
import {
  ImageWrapper,
  Img,
  InfoColumn,
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
  SectionDescription,

} from "./Projects.elements";

const Projects = ({
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  headline,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  id,
  sectionDescription
  // topLine,
  // lightTopLine
}) => {
  return (
    <ProjectSection>
      <Container>
        <Fade>
          <ProjectWrapper id={id}>
            <ProjectHeading>{headline}</ProjectHeading>
            <SectionDescription>{sectionDescription}</SectionDescription>
          </ProjectWrapper>
{/* Break */}
          <ProjectInfoRow>
          <InfoColumn>
            {/* project #1 */}
              <Project>
                <Anchor href="https://oagee.org/">
                  <ProjectTitle>OAGEE</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img6} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description6}</SubTitle>
              </Project>
            </InfoColumn>
            <InfoColumn>
            {/* project #2 */}
              <Project>
                <Anchor href="https://amydhindsa.ca">
                  <ProjectTitle>Amy Dhindsa</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img5} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description5}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>
{/* Break */}
          <ProjectInfoRow>
            {/* project #3 */}
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
            {/* project #4 */}
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
          {/* Break */}
          <ProjectInfoRow>
            {/* project #5 */}
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
            {/* project #6 */}
            <InfoColumn>
              <Project>
                <Anchor href="http://idioteque.ca">
                  <ProjectTitle>Idioteque</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img8} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description8}</SubTitle>
              </Project>
            </InfoColumn>
          </ProjectInfoRow>

{/* Break */}
          <ProjectInfoRow>
            {/* project #7 */}
            <InfoColumn>
              <Project>
                <Anchor href="https://communicationandbeyond.ca">
                  <ProjectTitle>Communication and Beyond</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img7} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description7}</SubTitle>
              </Project>
            </InfoColumn>
            {/* project #8 */}
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
          {/* Break */}
          <ProjectInfoRow>
            {/* project #9 */}
            <InfoColumn>
              <Project>
                <Anchor href="https://gillianmoranz.com">
                  <ProjectTitle>Gillian Moranz</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img9} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description9}</SubTitle>
              </Project>
            </InfoColumn>
            {/* project #8 */}
            {/* <InfoColumn>
              <Project>
                <Anchor href="https://github.com/FortunateSmith/ToolSwap">
                  <ProjectTitle>Tool Swap</ProjectTitle>
                  <ImageWrapper>
                    <Img src={img} />
                  </ImageWrapper>
                </Anchor>
                <SubTitle>{description}</SubTitle>
              </Project>
            </InfoColumn>  */}
          </ProjectInfoRow>
        </Fade>
      </Container>
    </ProjectSection>
    
  );
};

export default Projects;
