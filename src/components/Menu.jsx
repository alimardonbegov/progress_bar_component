import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeBurned,
    changeFreeFloat,
    changeGotFree,
    changeSold,
    clearValues,
} from "../redux/progressSlice";
import Input from "./Input";

function Menu() {
    const items = useSelector((state) => state.progress.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        if (name == "Sold") {
            dispatch(changeSold(e.target.value));
        }
        if (name == "Got free") {
            dispatch(changeGotFree(e.target.value));
        }
        if (name == "Burned") {
            dispatch(changeBurned(e.target.value));
        }
        if (name == "Free float") {
            dispatch(changeFreeFloat(e.target.value));
        }
    };

    const deleteValues = () => {
        dispatch(clearValues());
    };
    return (
        <div style={{ margin: "20px 0 " }}>
            <h2> Enter the value of each position</h2>
            {items.map((el, index) => (
                <Input
                    key={index}
                    placeholder={el.name}
                    name={el.name}
                    value={el.value}
                    color={el.color}
                    onChange={handleChange}
                />
            ))}

            <button
                style={{
                    fontSize: "1.2em",
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "8px",
                }}
                onClick={deleteValues}
            >
                {" "}
                Clear
            </button>
        </div>
    );
}

export default Menu;
