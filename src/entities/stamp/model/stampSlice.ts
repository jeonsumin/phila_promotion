import {fetchStamp, StampState} from "entities/stamp";
import {createSlice} from "@reduxjs/toolkit";

const initialState: StampState = {
    isLoading: false,
    stamp: []
}

const stampSlice = createSlice({
    name: 'stamp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStamp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchStamp.fulfilled, (state, action) => {
                state.isLoading = false
                state.stamp = action.payload
            })
            .addCase(fetchStamp.rejected, (state) => {
                state.isLoading = false
                state.stamp = null;
            })
    }
})

export default stampSlice.reducer;