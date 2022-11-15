import React, { useEffect } from "react";

import Legend from "./Legend";
import Bars from "./Bars";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { setTotal } from "../redux/progressSlice";

function ProgressBar() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.progress.items);
    const totalItems = useSelector((state) => state.progress.totalItems);
    const width = useSelector((state) => state.progress.width);
    const heigth = useSelector((state) => state.progress.heigth);

    useEffect(() => {
        let sum = Number();
        items.forEach((el) => {
            sum = sum + Number(el.value);
        });
        dispatch(setTotal(sum));
    }, [items]);

    return (
        <>
            <Menu />
            {totalItems !== 0 && (
                <div style={{ width: `${width}px`, fontFamily: "Aeroport, Arial, sans-serif" }}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                        {items.map((el, index) => {
                            return (
                                <Bars
                                    key={index}
                                    height={heigth}
                                    width={Math.floor((el.value / totalItems) * width) / 10}
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
                                    percent={((el.value / totalItems) * 100).toFixed(1)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProgressBar;

// вывести initialStateв reducer и подтянуть оттуда
