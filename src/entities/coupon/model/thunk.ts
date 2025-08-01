import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCoupon } from 'entities/coupon';

export const fetchCoupon = createAsyncThunk("coupon/fetchCoupon",async (_, thunkAPI) => {
    try{
        return await selectCoupon();
    } catch( error: any){
        return thunkAPI.rejectWithValue(error.message);
    }
});
