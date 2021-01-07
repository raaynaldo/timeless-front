import React from "react";
import Section from "./Section";

export default function SectionLine(props) {
  function generateSections() {
    return Object.entries(props.sections).reverse().map(([key, value], index) => (
      <Section key={key} year={key} index={index} timeline={value} user={props.user}/>
    ));
  }

  return generateSections();
}
