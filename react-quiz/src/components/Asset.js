import React from "react";

const Asset = ({ type, assetUrl }) => {
  if (type == "photo") {
    return <img src={assetUrl} alt="question photo" />;
  }
  if (type == "audio") {
    return (
      <audio controls>
        <source src={assetUrl} type="audio/ogg" />
        call support Your browser does not support the audio tag.
      </audio>
    );
  }
  if (type == "video") {
    return (
      <video width="400" height="400" controls>
        <source src={assetUrl} type="video/mp4" />
        call support Your browser does not support the video tag. call support
      </video>
    );
  }
};

export default Asset;
