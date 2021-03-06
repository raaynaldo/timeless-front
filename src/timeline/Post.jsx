import React, {useState} from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@material-ui/core";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useSlopeCardMediaStyles } from "@mui-treasury/styles/cardMedia/slope";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: "100%",
    width: 400,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
}));

export default function Post({ post, user }) {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const [photoShowing, setPhotoShowing] = useState(false);
  const seePhoto = () => {
    setPhotoShowing(true);
  }

  const dateOption = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(post.post_date).toLocaleDateString("en-US", dateOption);
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            onClick={seePhoto}
            classes={mediaStyles}
            image={post.image}
          />
          <Dialog open={photoShowing} onClose={() => setPhotoShowing(false)}>
            <img style ={{maxHeight: "50vw", maxWidth: "50vw"}}src={post.image}/>
          </Dialog>
          <Avatar
            className={cardStyles.avatar}
            src={user.image ? user.image : "/"}
            alt={user.full_name}
            // src={"https://i.pravatar.cc/300"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={date}
              body={post.body}
            />
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            {post.tags.map((tag, index) => (
              <Chip key={index} label={"#" + tag.name} />
            ))}
          </Box>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}
