import { createSlice } from "@reduxjs/toolkit";

type initialTYp = {name: string}

const initial : initialTYp = {
    name: "yodahe"
}

export const test = createSlice({
    name: 'test',
    initialState: initial,
    reducers: {
        changeName(state: initialTYp, actions) {
            state.name = actions.payload;
        }
    }
});

export const { changeName } = test.actions;
export default test.reducer;