import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 4 },
        { name: "Burned", color: "#19E148", value: 202 },
        { name: "Free float", color: "#9EA0B5", value: 323 },
    ],
    totalItems: 0,
    heigth: "20", // in px
    width: "1320", // in px
};

export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        changeSold: (state, action) => {
            state.items[0].value = action.payload;
        },
        changeGotFree: (state, action) => {
            state.items[1].value = action.payload;
        },
        changeBurned: (state, action) => {
            state.items[2].value = action.payload;
        },
        changeFreeFloat: (state, action) => {
            state.items[3].value = action.payload;
        },
        setTotal: (state, action) => {
            state.totalItems = action.payload;
        },
        clearValues: (state) => {
            state.items.map((el) => (el.value = 0));
        },
    },
});

export const { changeSold, changeGotFree, changeBurned, changeFreeFloat, setTotal, clearValues } =
    progressSlice.actions;
