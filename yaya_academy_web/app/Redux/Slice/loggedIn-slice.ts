import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged_in: false,
}

export const logged_in = createSlice({
    name: 'logged_in',
    initialState: initialState,
    reducers: {
        changeLoggedInState: (state) => {
            state.logged_in = !state.logged_in;
        },
    },
});