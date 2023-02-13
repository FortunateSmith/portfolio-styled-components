import React from "react";
import { Foot, FooterContainer, FooterIconBox, ThumbnailWrapper, Thumbnail } from "./Footer.elements";
import { Anchor } from "../InfoSection/InfoSection.elements";

const Footer = ({ bgColor, textColor, github, linkedIn }) => {
  return (
    <>
      <Foot bgColor={bgColor}>
        <FooterContainer textColor={textColor}>
          <FooterIconBox textColor={textColor}>&copy; 2023</FooterIconBox>
          <ThumbnailWrapper>
            <Anchor href="https://www.linkedin.com/in/liam-smith-4389a726/">
              <Thumbnail src={linkedIn} />
            </Anchor>
            <Anchor href="https://github.com/FortunateSmith">
              <Thumbnail src={github} />
            </Anchor>
          </ThumbnailWrapper>
        </FooterContainer>
      </Foot>
    </>
  );
};

export default Footer;
