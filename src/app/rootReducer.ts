import {combineReducers} from "@reduxjs/toolkit";
import {langSlice} from "features/changeLang";
import {layoutSlice} from "app/layout/layout";
import {stampReducer} from "entities/stamp";
import { couponReducer } from "entities/coupon";
import {eventPeriodSlice} from "features/period";


export const RootReducer = combineReducers({
    lang: langSlice.reducer,
    layout: layoutSlice.reducer,
    stamp: stampReducer,
    coupon: couponReducer,
    period: eventPeriodSlice.reducer,
})