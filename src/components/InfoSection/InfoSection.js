import React from "react";
import { Container } from "../../globalStyles";
// import { Link } from "react-router-dom";
// import ReactImg from "../../images/techLogos/React.png"
import { Fade, Roll, Slide } from "react-reveal";

import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Resume,
  ImageWrapper,
  Img,
  Anchor,
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
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container id={id}>
          <InfoRow imgStart={imgStart}>
            <InfoColumn stationary={stationary}>
              <TextWrapper
                lightBorder={lightBorder}
                borderShadow={borderShadow}
              >
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>

                {viewButton ? (
                  <Slide left>
                  <Anchor href="https://resume.creddle.io/resume/axbddmzuru6">
                    <Resume primary={primary}>{resumeLabel}</Resume>
                  </Anchor>
                  </Slide>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {circle ? (
                <CircleWrapper startCircle={startCircle}>
                  {/* Roll from react-reveal lib */}
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
