import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "/trailer.css";

import React from "react";

const Trailer = () => {
  let params = useParams();
  const key = params.yTrailerId;

  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={true}
          url={`https://www.youtube.com/watch?=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
