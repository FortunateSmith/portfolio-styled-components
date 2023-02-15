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
import { contactObj } from "../../components/ContactForm/ContactFormData";

const Home = () => {
  return (
    <>
      <Navbar/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
      <Projects  {...homeObjFive}/>
      <ContactForm {...contactObj}/>
      <Footer {...footerObj}/>
    </>
  );
};

export default Home;
