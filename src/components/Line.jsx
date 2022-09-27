import React, { useState } from "react";

function Line(props) {
    const [count, setCount] = useState([]);
    const width = Math.floor(props.width);

    if (count < width) {
        for (let i = 1; i < width + 1; i++) {
            setCount((prevValue) => [...prevValue, i]);
        }
    }
    console.log(count);

    return (
        <div className="block-line">
            {count.map((el, index) => {
                return (
                    <div
                        key={index}
                        className="block-line__line"
                        style={{ backgroundColor: props.color }}
                    ></div>
                );
            })}
        </div>
    );
}

export default Line;

// вывести props в reducer и подтянуть оттуда
