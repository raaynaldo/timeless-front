import React from "react";
import "./output.css";
import Post from './Post'

export default function Section(props) {
  return (
      <section className={`section section${props.id}`} id={`section${props.id}`}>
        <div>
        {"Section" + props.id}
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
      </section>
  );
}
