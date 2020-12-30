import React from "react";
import "./output.css";

export default function Section(props) {
  return (
      <section className={`section section${props.id}`} id={`section${props.id}`}>
        {"Section" + props.id}
      </section>
  );
}
