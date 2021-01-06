import React from "react";
import PostForm from "./PostForm";
import FollowButton from "./FollowButton";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    paddingBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

export default function ProfileInfo(props) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  return (
    <div>
      <div></div>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} />
          <h3 className={styles.heading}>{props.user_data.full_name}</h3>
          <span className={styles.subheader}>{props.user_data.username}</span>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <Button className={styles.statLabel}>Followers</Button>
            <p className={styles.statValue}>
              {props.user_data.followers_count}
            </p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <Button className={styles.statLabel}>Following</Button>
            {/* <Dialog open={followingOpen}>

            </Dialog> */}
            <p className={styles.statValue}>{props.user_data.followee_count}</p>
          </Box>
        </Box>
        {props.is_user ? (
          <PostForm />
        ) : (
          <FollowButton
            following={props.is_following}
            id={props.user_data.id}
          />
        )}
      </Card>
      );
    </div>
  );
}
