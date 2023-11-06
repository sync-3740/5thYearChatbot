import React from "react";

import "../LearningOptions/LearningOptions.css";


const HyperlinkHandler = (props) => {
    
    return <div><a href={props.payload} target="_blank">More Information Here</a></div>;

};

export default HyperlinkHandler;
