import React from "react";
import { homeObjTwo } from "./Data"
import { InfoSection } from "../../components";
// import { homeObjTwo } from "../Data";

const FrontEnd = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default FrontEnd;