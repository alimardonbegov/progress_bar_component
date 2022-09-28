import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { name: "Sold", color: "#BD1FBE", value: 677 },
        { name: "Got free", color: "#FC64FF", value: 4 },
        { name: "Burned", color: "#19E148", value: 202 },
        { name: "Free float", color: "#9EA0B5", value: 323 },
    ],
    heigth: "20", // in px
    width: "1320", // in px
};

export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
        chandeSold: (state, action) => {
            return;
        },
        chandeGotFree: (state, action) => {
            return;
        },
        chandeBurned: (state, action) => {
            return;
        },
        chandeFreeFloat: (state, action) => {
            return;
        },
    },
});

export const { chandeSold, chandeGotFree, chandeBurned, chandeFreeFloat } = progressSlice.actions;
