import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVideos(data?.items || []);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          background: 'Linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,183,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr:{sm: '100px'}}} />
          <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
