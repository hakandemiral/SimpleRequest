import React from "react";

const Box = props => {
    return(
        <div className="box">
            <div className="label">{props.label}</div>
            <textarea onChange={(e) => {props.changeState(props.type, e.target.value)}} readOnly={props.readonly} value={props.data} cols="30" rows="14"></textarea>
        </div>
    );
};

export default Box;