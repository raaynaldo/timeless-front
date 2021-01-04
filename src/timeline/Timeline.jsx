import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../context/auth/authContext";
import "./output.css";
import VisualTimeline from "./VisualTimeline";
import SectionLine from "./SectionLine";
import axios from "axios";

let test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Timeline() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [timeline, setTimeline] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    console.log(user);
    if (user) {
      console.log("hey there");
      axios.get(`/user_posts/${user.id}`).then((res) => {
        setTimeline(res.data.posts);
        setYears(Object.keys(res.data.posts).reverse());
      });
    }
  }, [user]);

  return (
    <div className="wrapper">
      <VisualTimeline sections={years} />
      <SectionLine sections={timeline} />
    </div>
  );
}
