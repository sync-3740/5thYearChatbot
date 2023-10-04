import React from "react";

import "../LearningOptions/LearningOptions.css";

const VideoHandler = (props) => {

    return <div class="learning-options-container"> <iframe width="250" height="200" src={props.payload} title="Blood Pressure Numbers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>;

};

export default VideoHandler;
