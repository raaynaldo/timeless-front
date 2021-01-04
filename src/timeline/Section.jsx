import React from "react";
import "./output.css";
import Post from "./Post";

export default function Section(props) {
  return (
    <section
      className={`section section${props.year}`}
      id={`section${props.year}`}
    >
      <div>
        {props.timeline.map(t => {
          return <Post post={t}/>
        })}
      </div>
    </section>
  );
}
