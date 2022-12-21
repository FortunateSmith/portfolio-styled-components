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
          This is a footer
          <FooterIconBox textColor={textColor}>
            Icons Here
          </FooterIconBox>
        </FooterContainer>
      </Foot>
    </>
  )
}

export default Footer