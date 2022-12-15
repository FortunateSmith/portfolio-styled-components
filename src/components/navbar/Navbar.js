import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../images/Logo.png";
import { animateScroll as scroll } from "react-scroll";
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

  // const frontend = useRef(null);


  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth"
  //   })
  // }
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon src={Logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="home" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-240}
                >Home</NavLinks>
              </NavItem>


              <NavItem>
                <NavLinks to="frontend"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-240}
                >Frontend</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="backend"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-240}
                >Backend</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-240}
                >About Liam</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-240}
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
