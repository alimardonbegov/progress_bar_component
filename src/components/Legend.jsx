import React from "react";

function Legend(props) {
    return (
        <div className="legend">
            <div
                className="legend__color legend__element"
                style={{ backgroundColor: props.color }}
            ></div>
            <div className="legend__element">{props.name}: </div>
            <div className="legend__element">{props.value} </div>
            <div className="legend__element">( {props.percent} %)</div>
        </div>
    );
}

export default Legend;
