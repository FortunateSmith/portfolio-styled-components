import React from "react";
import { Foot, FooterContainer, FooterIconBox, ThumbnailWrapper, Thumbnail } from "./Footer.elements";
import { Anchor } from "../InfoSection/InfoSection.elements";


const Footer = ({ bgColor, textColor, github, linkedIn }) => {
  return (
    <>
      <Foot bgColor={bgColor}>
        <FooterContainer textColor={textColor}>
          <FooterIconBox alt="Copywrite Liam Smith 2025" textColor={textColor}>&copy; 2025 Liam Smith  </FooterIconBox>
          <ThumbnailWrapper>
            <Anchor href="https://www.linkedin.com/in/liam-smith-4389a726/">
              <Thumbnail alt="Linked In" src={linkedIn} />
            </Anchor>
            <Anchor href="https://github.com/FortunateSmith">
              <Thumbnail alt="Git Hub" src={github} />
            </Anchor>
          </ThumbnailWrapper>
        </FooterContainer>
      </Foot>
    </>
  );
};

export default Footer;
