import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='flex-start' gap={2}>
      {
        videos.map((itm, idx) => (
          <Box key={idx}>
            {itm.id.videoId && <VideoCard video={itm} />}
            {itm.id.channelId && <ChannelCard channelDetail={itm} />}
          </Box>
        ))
      }
    </Stack>
  );
}

export default Videos;
