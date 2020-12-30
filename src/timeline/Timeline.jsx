import React from "react";
import "./output.css";
import VisualTimeline from "./VisualTimeline";
import SectionLine from "./SectionLine"

let test = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]



export default function Timeline() {
  return (
    <div className="wrapper">
      <VisualTimeline sections={test}/>
      <SectionLine sections={test}/>
    </div>
  );
}
