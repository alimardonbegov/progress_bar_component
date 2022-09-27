import React, { useState } from "react";
import Fraction from "./Fraction";
import Legend from "./Legend";
import Line from "./Line";

function ProgressBar() {
    const [sold, setSold] = useState([
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 23 },
        { name: "Burned", color: "#19E148", value: 202 },
        { name: "Free float", color: "#9EA0B5", value: 323 },
    ]);

    const width = 70; // in %
    const height = 20; // in px

    let sum = 0;
    sold.forEach((el) => {
        sum = sum + el.value;
    });

    return (
        <div>
            {sum !== 0 ? (
                <div
                    className="container"
                    style={{
                        width: `${width}%`,
                        // height: `${height}%`
                    }}
                >
                    <div className="progress-bar">
                        {sold.map((el, index) => {
                            return (
                                <Fraction
                                    key={index}
                                    color={el.color}
                                    width={(el.value / sum) * 100}
                                    height={height}
                                    value={el.value}
                                />
                            );
                        })}
                    </div>
                    <div className="progress-legend">
                        {sold.map((el, index) => {
                            return (
                                <Legend
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
