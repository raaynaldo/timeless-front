import React from "react";
import "./output.css";
import Post from "./Post";

export default function Section(props) {
  // const color = [
  //   "#F64747",
  //   "#22A7F0",
  //   "#F9690E",
  //   "#9B59B6",
  //   "#03C9A9",
  //   "#ffcc00",
  // ];

  // const color = [
  //   "#f94144ff",
  //   "#f3722cff",
  //   "#f8961eff",
  //   "#f9c74fff",
  //   "#90be6dff",
  //   "#43aa8bff",
  //   "#577590ff",
  // ];

  const color = [
    "#f72585ff",
    "#b5179eff",
    "#7209b7ff",
    "#560badff",
    "#480ca8ff",
    "#3a0ca3ff",
    "#3f37c9ff",
    "#4361eeff",
    "#4895efff",
    "#4cc9f0ff",
  ].reverse()

  // const color = [
  //   "#ef476fff",
  //   "#ffd166ff",
  //   "#06d6a0ff",
  //   "#118ab2ff",
  //   "#073b4cff",
  // ];

  const bgColor = props.index % color.length;
  const bgColor2 = (props.index + 1) % color.length;

  return (
    <section
      className={`section section${props.year}`}
      style={{
        backgroundImage: `linear-gradient(${color[bgColor]}, ${color[bgColor2]}`,
      }}
      id={`section${props.year}`}
    >
      <div>
        {props.timeline.map((t, index) => {
          return <Post key={index} post={t} user={props.user} />;
        })}
      </div>
    </section>
  );
}
