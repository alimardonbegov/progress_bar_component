import React from "react";

function Legend(props) {
    return (
        <div
            style={{
                maxWidth: `${props.maxWidth}px`,
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginRight: "30px",
            }}
        >
            <div
                style={{
                    backgroundColor: props.color,
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                }}
            ></div>
            <div style={{ marginRight: "20px" }}>{props.name}:</div>
            <div style={{ marginRight: "20px" }}>{props.value} </div>
            <div style={{ marginRight: "20px" }}>({props.percent} %)</div>
        </div>
    );
}

export default Legend;
