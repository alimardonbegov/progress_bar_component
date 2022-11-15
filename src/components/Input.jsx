import React from "react";

function Input(props) {
    return (
        <input
            style={{
                height: "1em",
                width: "100px",
                marginRight: "10px",
                fontSize: "1.2em",
                fontWeight: "bold",
                borderRadius: "8px",
                color: props.color,
            }}
            type="number"
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;
