import React from "react";

function Legend(props) {
    return (
        <div className="legend">
            <div className="legend__color" style={{ backgroundColor: props.color }}></div>
            <div className="legend__name">{props.name}: </div>
            <div className="legend__value">{props.value} </div>
            <div className="legend__percent">( {props.percent} %)</div>
        </div>
    );
}

export default Legend;
