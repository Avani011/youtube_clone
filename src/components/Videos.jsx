import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Box
      display="flex"
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Link to={`/video/${item.id.videoId}`} key={idx}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.snippet.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.snippet.channelTitle}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default Videos;
