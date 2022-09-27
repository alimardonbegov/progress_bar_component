import React, { useState } from "react";
import Fraction from "./Fraction";
import Legend from "./Legend";

function ProgressBar() {
    const [sold, setSold] = useState([
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#19E148", value: 202 },
        { name: "Free float", color: "#9EA0B5", value: 323 },
    ]);

    const width = 100; // in %%%
    const height = 80; // in %%%

    let sum = 0;
    sold.forEach((el) => {
        sum = sum + el.value;
    });

    return (
        <div className="container">
            <div
                className="progress-bar"
                style={{
                    width: `${width}%`,
                    // height: `${height}%`
                }}
            >
                {sold.map((el) => {
                    return (
                        <Fraction
                            color={el.color}
                            width={(el.value / sum) * 100}
                            // height={height}
                            value={el.value}
                        />
                    );
                })}
            </div>
            <div className="progress-legend">
                {sold.map((el) => {
                    return (
                        <Legend
                            color={el.color}
                            name={el.name}
                            value={el.value}
                            percent={((el.value / sum) * 100).toFixed(1)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProgressBar;
