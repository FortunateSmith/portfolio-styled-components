import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../images/Logo.png";
import { animateScroll as scroll, Element } from "react-scroll";
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
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navOpacity, setNavOpacity] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  // toggles button between regular and big when button switches from full nav to hamburger
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // to call showButton
  useEffect(() => {
    showButton();
  }, []);

  // scroll to top on logo click
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // set opacity (designed for navbar)
  const opac = () => {
    if (window.scrollY >= 80 && window.innerWidth >= 960) {
      setNavOpacity(true);
    } else {
      setNavOpacity(false);
    }
  };

  // window.addEventListener("scroll", handleClick)
  window.addEventListener("scroll", opac)
  // triggers useEffect when window width hits 960px
  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className={navOpacity ? "active" : null} onScroll={opac}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon src={Logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="home"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-157}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="frontend"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  Frontend
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="backend"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  Backend
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="about"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  About Liam
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="projects"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/about">
                    <Button primary>Contact</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/about">
                    <Button fontBig primary>
                      Contact
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
