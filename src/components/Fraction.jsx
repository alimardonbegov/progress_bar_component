import React from "react";
import Line from "./Line";

function Fraction(props) {
    return (
        <div
            style={{
                width: `${props.width}%`,
                height: `${props.height}px`,
            }}
        >
            <Line width={props.width} color={props.color} />
        </div>
    );
}

export default Fraction;
