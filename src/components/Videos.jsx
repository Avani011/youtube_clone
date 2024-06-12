import React from "react";
import { Grid } from "@mui/material";
import VideoCard from "./VideoCard"; // Assume you have a VideoCard component
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Grid container direction={direction}>
      {videos.map((video, idx) => (
        <Grid item key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;

