import styled from "styled-components";
import { Container } from "../../globalStyles";
// import { FaMagento } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom"

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  opacity: 1;
  transition: 0.5s;
  width: 100vw;
  margin-bottom: 30px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100vw;

  ${Container}
`;

export const NavLogo = styled(LinkRouter)`
  color: #fffbfd;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 120px;
  height: 90%;
  background: transparent;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    /* click is false, NavMenu hidden -- click is true, slides from left */
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
  &:hover {
    background-color: #fffbfd;
    color: #101522;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid #101522;
  cursor: pointer;

  &:hover {
    color: #101522;
    border-bottom: 3px solid #fffbfd;
  }

  &.active {
    border-bottom: 3px solid #2cf4ff
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #101522;
      transition: all 0.3s ease;
      border-bottom: none;
    }
    &.active {
    border-bottom: none;
  }
  }
`;


export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}
`

export const NavBtnLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;  
`
