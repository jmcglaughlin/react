import React from 'react';

const VideoDetail = ({ video }) => {
  // need to account for no selected video
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
