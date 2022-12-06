import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImageWrapper,
  Img,
  Anchor,
} from "./InfoSection.elements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  primary,
  buttonLabel,
  start,
  img,
  alt,
  viewButton,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>

                {viewButton ? (
                  <Anchor href="https://resume.creddle.io/resume/axbddmzuru6">
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Anchor>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImageWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
