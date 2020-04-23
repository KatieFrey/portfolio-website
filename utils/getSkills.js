import React, { useState } from "react";
import { featureSkills } from "../data/featureSkills";

export const GetSkills = () => {
  const [skills, setSkills] = useState([featureSkills]);
  // A placeholder is needed, to tell react-ticker, that width and height might have changed
  // It uses MutationObserver internally
  return skills ? (
    <p style={{ whiteSpace: "nowrap" }}>{skills.join(" ")}</p>
  ) : (
    <p style={{ visibility: "hidden" }}>placeholder</p>
  );
};
