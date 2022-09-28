import React, { useState } from "react";

import Legend from "./Legend";
import Bars from "./Bars";

function ProgressBar() {
    const [sold, setSold] = useState([
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 24 },
        { name: "Burned", color: "#19E148", value: 202 },
        { name: "Free float", color: "#9EA0B5", value: 323 },
    ]);

    const width = 1320; // in px
    //  const height = 20; // in px

    let sum = 0;
    sold.forEach((el) => {
        sum = sum + el.value;
    });

    return (
        <div>
            {sum !== 0 ? (
                <div style={{ width: `${width}px` }}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                        {sold.map((el, index) => {
                            return (
                                <Bars
                                    width={Math.floor((el.value / sum) * width) / 10}
                                    color={el.color}
                                />
                            );
                        })}
                    </div>
                    <div style={{ display: "flex" }}>
                        {sold.map((el, index) => {
                            return (
                                <Legend
                                    maxWidth={width}
                                    key={index}
                                    color={el.color}
                                    name={el.name}
                                    value={el.value}
                                    percent={((el.value / sum) * 100).toFixed(1)}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default ProgressBar;

// вывести initialStateв reducer и подтянуть оттуда
