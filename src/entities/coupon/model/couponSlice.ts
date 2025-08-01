import { createSlice } from "@reduxjs/toolkit";
import { fetchCoupon } from "./thunk";
import { CouponState } from "./types";

const initialState: CouponState = {
    isLoading : false,
    coupon: []
}

const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.coupon = action.payload;
            })
            .addCase(fetchCoupon.rejected, (state) => {
                state.isLoading = false;
                state.coupon = null;
            })
    }
})

export default couponSlice.reducer;


