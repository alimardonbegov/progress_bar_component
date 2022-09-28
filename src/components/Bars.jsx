import React from "react";

function Bars(props) {
    const width = props.width;
    const count = [];

    for (let i = 1; i < width; i++) {
        count.push(i);
    }

    return (
        <div style={{ display: "flex" }}>
            {count.map((el, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            backgroundColor: props.color,
                            marginRight: "2px",
                            width: "8px",
                            height: "20px",
                            borderRadius: "25%",
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default Bars;

// вывести props в reducer и подтянуть оттуда
