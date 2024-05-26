import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [Videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelID=${id}&part=snippet&order=data`).then((data) => setVideos(data?.items[0]));
  }, [id])

  return (
    <div>
      
    </div>
  );
}

export default ChannelDetail;
