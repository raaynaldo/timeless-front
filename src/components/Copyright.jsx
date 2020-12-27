import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Box mt={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/brycemooore">
          Bryce
        </Link>
        {" & "}
        <Link color="inherit" href="https://github.com/raaynaldo">
          Raynaldo
        </Link>{" "}
        {2020}
        {"."}
      </Typography>
    </Box>
  );
}

export default Copyright;
