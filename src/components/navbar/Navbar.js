import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../images/Logo.png";
import { animateScroll as scroll} from "react-scroll";
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
  window.addEventListener("scroll", opac);
  // triggers useEffect when window width hits 960px
  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className={navOpacity ? "active" : null} onScroll={opac}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon alt="Logo, scroll to top" src={Logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="home"
                  alt="home"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  to="about"
                  alt="about"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  About Me
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  alt="skills"
                  to="skills"
                  smooth={true}
                  duration={1000}
                  delay={100}
                  spy={true}
                  exact="true"
                  offset={-240}
                >
                  Skills
                </NavLinks>
              </NavItem>

              {/* <NavItem>
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
              </NavItem> */}

              <NavItem>
                <NavLinks
                  onClick={handleClick}
                  alt="projects"
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
                  <NavBtnLink
                    onClick={handleClick}
                    alt="contact"
                    to="contact"
                    smooth={true}
                    duration={1000}
                    delay={100}
                    spy={true}
                    exact="true"
                    offset={-240}
                  >
                    <Button primary>Contact</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    onClick={handleClick}
                    alt="contact"
                    to="contact"
                    smooth={true}
                    duration={1000}
                    delay={100}
                    spy={true}
                    exact="true"
                    offset={-240}
                  >
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
