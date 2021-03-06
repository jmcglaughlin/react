import React from 'react';

const VideoDetail = ({ video }) => {
  // need to account for no selected video
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      {/* use seantics to embed an iframe for youtube player */}
      <div className="ui embed">
        <iframe src={videoSrc} alt="Video Player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
