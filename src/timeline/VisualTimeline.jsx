import React from "react";
import "./output.css";
import NavSection from './NavSection'

export default function VisualTimeline(props) {

    function generateSections() {
        return props.sections.map((section, index) => <NavSection id={index + 1}/>)
      }

  return (
      <nav className="nav__wrapper" id="navbar-example">
        <ul className="nav">
            {generateSections()}
        </ul>
      </nav>
  );
}
