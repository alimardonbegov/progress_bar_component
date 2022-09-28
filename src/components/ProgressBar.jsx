import React from "react";

import Legend from "./Legend";
import Bars from "./Bars";
import { useSelector } from "react-redux";

function ProgressBar() {
    const items = useSelector((state) => state.progress.items);
    const width = useSelector((state) => state.progress.width);
    const heigth = useSelector((state) => state.progress.heigth);

    let sum = 0;
    items.forEach((el) => {
        sum = sum + el.value;
    });

    return (
        <div>
            {sum !== 0 && (
                <div style={{ width: `${width}px`, fontFamily: "Aeroport, Arial, sans-serif" }}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                        {items.map((el, index) => {
                            return (
                                <Bars
                                    key={index}
                                    height={heigth}
                                    width={Math.floor((el.value / sum) * width) / 10}
                                    color={el.color}
                                />
                            );
                        })}
                    </div>
                    <div style={{ display: "flex" }}>
                        {items.map((el, index) => {
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
            )}
        </div>
    );
}

export default ProgressBar;

// вывести initialStateв reducer и подтянуть оттуда
