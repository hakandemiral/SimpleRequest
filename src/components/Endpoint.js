import React from "react";

const Endpoint = props => {
    return(
        <div className="endpoint">
            <select id="method" name="method" onChange={(e) => {props.changeState("req_type", e.target.value)}}>
                <option value="get">GET</option>
                <option value="post">POST</option>
                <option value="put">PUT</option>
                <option value="delete">DELETE</option>
            </select>
            <input type="text" name="url" id="url" onChange={(e) => {props.changeState("url", e.target.value)}}/>
        </div>
    )

};

export default Endpoint;