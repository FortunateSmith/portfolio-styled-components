import React from 'react'
import {
  Foot, FooterContainer, FooterIconBox
} from "./Footer.elements"

const Footer = () => {
  return (
    <>
      <Foot>
        <FooterContainer>
          This is a footer
          <FooterIconBox>
            Icons Here
          </FooterIconBox>
        </FooterContainer>
      </Foot>
    </>
  )
}

export default Footer