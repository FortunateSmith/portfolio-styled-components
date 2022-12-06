import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener("resize", showButton)
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src="../../images/Community-garden-icon.svg"/>
              Liam Smith
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}  click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/skills">Skills</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">About Liam</NavLinks>
              </NavItem>

              <NavItemBtn>{button ? (
                <NavBtnLink to="/about">
                  <Button primary>Contact</Button>
                </NavBtnLink>) : (<NavBtnLink to="/about">
                  <Button fontBig primary>Contact</Button>
                </NavBtnLink>
              )}</NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
