import { Stack, Box } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {

  if(videos) {
    return (
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
              {item.id.videoID && <VideoCard video={item} />}
              {item.id.channelID && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    );
  }
}

export default Videos;
