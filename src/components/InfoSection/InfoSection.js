import React from "react";
import { Container } from "../../globalStyles";
// import { Link } from "react-router-dom";
// import ReactImg from "../../images/techLogos/React.png"
import {  Roll, Fade } from "react-reveal";
// Slide,
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  // Resume,
  ImageWrapper,
  Img,
  // Anchor,
  CircleWrapper,
  Deg0,
  Deg60,
  Deg120,
  Deg180,
  Deg240,
  Deg300,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  lightTextDesc,
  lightBorder,
  borderShadow,
  headline,
  description,
  primary,
  resumeLabel,
  start,
  img,
  alt,
  id,
  viewButton,
  circle,
  img0,
  img60,
  img120,
  img180,
  img240,
  img300,
  startCircle,
  stationary,
  justify
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn stationary={stationary} justify={justify}>
              <TextWrapper
                id={id}
                lightBorder={lightBorder}
                borderShadow={borderShadow}
              >
                {/* <Fade> */}
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                {/* </Fade> */}
                {/* {viewButton ? (
                  <Slide left>
                    <Anchor href="https://liam-smith-resume.tiiny.site">
                      <Resume primary={primary}>{resumeLabel}</Resume>
                    </Anchor>
                  </Slide>
                ) : null} */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {circle ? (
                <CircleWrapper startCircle={startCircle}>
                  {/* Roll from react-reveal lib0 */}
                  <Fade>
                  <Roll right>
                  <Deg0 src={img0} />
                  <Deg60 src={img60} />
                  <Deg120 src={img120} />
                  <Deg180 src={img180} />
                  <Deg240 src={img240} />
                  <Deg300 src={img300} />
                  </Roll>
                  </Fade>
                </CircleWrapper>
              ) : (
                <ImageWrapper start={start}>
                  {/* Fade from react-reveal lib */}
                  <Fade>
                  <Img src={img} alt={alt} />
                  </Fade>
                </ImageWrapper>
              )}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
