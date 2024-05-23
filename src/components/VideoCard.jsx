import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video: {id: 
    {videoID}, snippet }}) => {

    return (
        <Card>
            <Link to= {videoID ? `/video/${videoID}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} 
                    alt={snippet?.title}
                    sx={{ width:358, height:180 }}
                />
            </Link>
        </Card>
  );
}

export default VideoCard;
