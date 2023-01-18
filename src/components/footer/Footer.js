import React from 'react'
import {
  Foot, FooterContainer, FooterIconBox
} from "./Footer.elements"


const Footer = ({
  bgColor,
  textColor
}) => {
  return (
    <>
      <Foot bgColor={bgColor}>
        <FooterContainer textColor={textColor}>
          <FooterIconBox textColor={textColor}>
            &copy; 2023
          </FooterIconBox>
        </FooterContainer>
      </Foot>
    </>
  )
}

export default Footer