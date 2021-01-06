import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import TimelineContext from "../context/timeline/timelineContext";

export default function FollowButton(props) {
  const timelineContext = useContext(TimelineContext);
  const { followUnfollow } = timelineContext;

  const handleClick = () => {
    followUnfollow({ id: props.id });
  };

  return (
    <div>
      {props.following ? (
        <Button variant="outlined" color="secondary" onClick={handleClick}>
          UnFollow
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Follow
        </Button>
      )}
    </div>
  );
}
