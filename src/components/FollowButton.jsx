import React from "react";
import { Button } from "@material-ui/core";

export default function FollowButton(props) {
  const handleClick = () => {
    alert("hello world");
  };

  return (
    <div>
        {(props.following ? 
              <Button variant="outlined" color="secondary" onClick={handleClick}>
              UnFollow
            </Button> :
              <Button variant="outlined" color="primary" onClick={handleClick}>
              Follow
            </Button>)}
    </div>
  );
}
