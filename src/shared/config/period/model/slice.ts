import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    isEventPeriod: 1,
}

export const eventPeriodSlice = createSlice({
    name: 'eventPeriod',
    initialState,
    reducers: {
        updatePeriod: (state) => {
            const now = moment();
            const start = moment("2025-09-17");
            const end = moment("2025-09-21");

            if(now.isBefore(start,'day')) state.isEventPeriod = 0

            if(now.isAfter(end, 'day')) state.isEventPeriod = 2
        }
    },
})

export const {updatePeriod} = eventPeriodSlice.actions;
