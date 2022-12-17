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

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const opac = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      console.log("NOW")
      setNavOpacity(true)
    } else {
      setNavOpacity(false)
    }
  }

  window.addEventListener("scroll", opac)

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className={navOpacity ? 'active' : null}  onScroll={opac}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon src={Logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} >
              <NavItem>
                <NavLinks 
                    onClick={handleClick} 
                    to="home" 
                    smooth={true}
                    duration={1000}
                    delay={100}
                    spy={true}
                    exact="true"
                    offset={-237}
  
                >Home</NavLinks>
              </NavItem>

              <Element>
              <NavItem>
                <NavLinks 
                onClick={handleClick} 
                to="frontend"
                smooth={true}
                duration={1000}
                delay={100}
                spy={true}
                exact="true"
                offset={-237}
                >Frontend</NavLinks>
              </NavItem>
              </Element>

              <NavItem>
                <NavLinks 
                onClick={handleClick} 
                to="backend"
                smooth={true}
                duration={1000}
                delay={100}
                spy={true}
                exact="true"
                offset={-237}
                >Backend</NavLinks>
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
                  offset={-237}

                >About Liam</NavLinks>
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
                  offset={-237}

                >Projects</NavLinks>
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
