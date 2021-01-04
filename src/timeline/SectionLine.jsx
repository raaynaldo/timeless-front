import React from "react";
import Section from "./Section";

export default function SectionLine(props) {
  function generateSections() {
    return Object.entries(props.sections).reverse().map(([key, value]) => (
      <Section key={key} year={key} timeline={value} />
    ));
  }

  return generateSections();
}
