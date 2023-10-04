import React from "react";

import "../LearningOptions/LearningOptions.css";
import office_bp from "../../static/office_bp.jpg"
import bp_procedure from "../../static/blood_pressure_demo.jpg"
import bp_advice from "../../static/blood_pressure_taking_advice.jpg"

const ImageHandler = (props) => {
    var props_dict = {"office_bp": office_bp, "bp_procedure": bp_procedure, "bp_advice": bp_advice}

    return <div class="learning-options-container"><img src={props_dict[props.payload]} alt="Office BP" width="250" height="200"></img></div>;

};

export default ImageHandler;
