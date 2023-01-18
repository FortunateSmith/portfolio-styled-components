import React from "react";
import { InfoSection, Navbar, Footer, ContactForm } from "../../components";
// import { FooterObj } from "../../components/footer/FooterData";

import {
  homeObjOne,
  homeObjTwo,
  // homeObjThree,
  homeObjFour,
  homeObjFive,
  footerObj,
} from "./Data";

const Home = () => {
  return (
    <>
      <Navbar/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjThree} /> */}
      <InfoSection {...homeObjFive} />
      <ContactForm/>
      <Footer {...footerObj}/>
    </>
  );
};

export default Home;
