import React from "react";

import "../LearningOptions/LearningOptions.css";

const VideoHandler = (props) => {

    return <div className="learning-options-container"> <iframe width="250" height="200" src={props.payload} title="Blood Pressure Numbers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>;

};

export default VideoHandler;
