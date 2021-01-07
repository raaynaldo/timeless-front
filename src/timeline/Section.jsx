import React from "react";
import "./output.css";
import Post from "./Post";

export default function Section(props) {
  const color = [
    "#f72585ff",
    "#b5179eff",
    "#7209b7ff",
    "##560badff",
    "480ca8ff",
    "#3a0ca3ff",
    "#3f37c9ff",
    "#4361eeff",
    "#4895efff",
    "#4cc9f0ff"
  ].reverse();
  const bgColor = props.index % color.length;
  return (
    <section
      className={`section section${props.year}`}
      style={{ backgroundImage: `linear-gradient(${color[bgColor]}, ${color[bgColor+1]}` }}
      id={`section${props.year}`}
    >
      <div>
        {props.timeline.map((t, index) => {
          return <Post key={index} post={t} />;
        })}
      </div>
    </section>
  );
}
