import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
console.log(data)
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      console.log("videosdata",videosData)

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  console.log("video ",videos)

  return (
  
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-10rem" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

// import React from 'react'

// const ChannelDetail = () => {
//   return (
//     <div>ChannelDetail</div>
//   )
// }

// export default ChannelDetail