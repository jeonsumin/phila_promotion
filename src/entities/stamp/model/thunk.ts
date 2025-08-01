import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectStamp} from "entities/stamp";

export const fetchStamp = createAsyncThunk('stamp/fetchStamp', async (_, thunkAPI) => {
    try {
        return await selectStamp();
    } catch(error:any){
        return thunkAPI.rejectWithValue(error.message);
    }
})