import React from 'react';
import VideoItem from './VideoItem';

// deconstruct videos out of props
const VideoList = ({ videos, onVideoSelect }) => {
  // create a renderedList of videos mapped from videos passed to us
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  // display the rendered list of videos
  // look-up semantic "List" to clean up design using list css
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
