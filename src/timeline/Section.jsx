import React from "react";
import "./output.css";
import Post from "./Post";

export default function Section(props) {
  const color = [ "#F64747", "#22A7F0", "#F9690E", "#9B59B6", "#03C9A9", "#ffcc00"];
  const bgColor = props.index % 6;
  return (
    <section
      className={`section section${props.year}`}
      style={{backgroundColor: color[bgColor]
      }}
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
