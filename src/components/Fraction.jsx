import React from "react";

function Fraction(props) {
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: `${props.width}%`,
                height: `${props.height}%`,
            }}
        >
            {props.value}
        </div>
    );
}

export default Fraction;
