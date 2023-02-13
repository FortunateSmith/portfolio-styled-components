import React from "react";
import { InfoSection, Navbar, Footer, ContactForm, Projects } from "../../components";
// import { FooterObj } from "../../components/footer/FooterData";

import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from "./Data";

import { homeObjFive } from "./ProjectData";
import { footerObj } from "../../components/footer/FooterData";

const Home = () => {
  return (
    <>
      <Navbar/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
      <Projects  {...homeObjFive}/>
      <ContactForm/>
      <Footer {...footerObj}/>
    </>
  );
};

export default Home;
