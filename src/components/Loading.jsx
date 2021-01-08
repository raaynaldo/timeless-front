import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const loaderStyle = {
  top: "0",
  width: "100%",
  position: "absolute",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Loading() {
  return (
    <div style={loaderStyle}>
      <CircularProgress size={100} />
    </div>
  );
}

export default Loading;
