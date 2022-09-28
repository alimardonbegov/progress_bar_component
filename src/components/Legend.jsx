import React from "react";

function Legend(props) {
    const d5 = "5px";
    const d10 = "10px";
    const d20 = "20px";
    const d60 = "60px";

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: d20,
                marginRight: d60,
            }}
        >
            <div
                className="circle-color"
                style={{
                    backgroundColor: props.color,
                    borderRadius: "50%",
                    height: d20,
                    width: d20,
                    marginRight: d5,
                }}
            ></div>
            <div style={{ marginRight: d10 }}>{props.name}:</div>
            <div style={{ marginRight: d10 }}>{props.value} </div>
            <div style={{ marginRight: d10 }}>({props.percent} %)</div>
        </div>
    );
}

export default Legend;
