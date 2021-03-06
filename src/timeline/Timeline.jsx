import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import TimelineContext from "../context/timeline/timelineContext";
import ProfileInfo from "../components/ProfileInfo";
import VisualTimeline from "./VisualTimeline";
import SectionLine from "./SectionLine";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import "./output.css";

export default function Timeline() {
  const params = useParams();

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const timelineContext = useContext(TimelineContext);
  const {
    posts,
    user_data,
    is_following,
    loading,
    error,
    getCurrentUserProfile,
    getOtherUserProfile,
  } = timelineContext;

  useEffect(() => {
    if (user) {
      if (!params.username) {
        getCurrentUserProfile();
      } else {
        getOtherUserProfile(params.username);
      }
    }
  }, [user, params]);

  if (!loading && !error) {
    return (
      <div className="wrapper">
        <ProfileInfo
          user_data={user_data}
          is_user={user.id == user_data.id}
          is_following={is_following}
        />
        <div className="split-side-bar">
          <VisualTimeline sections={Object.keys(posts).reverse()} />
          <div className="content">
            <SectionLine
              sections={posts}
              user={{ full_name: user_data.full_name, image: user_data.image }}
            />
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return <h1>{error}</h1>;
  } else {
    return <Loading />;
  }
}
