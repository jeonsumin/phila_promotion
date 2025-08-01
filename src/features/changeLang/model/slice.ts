import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = {
    currentLang: "KR",
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state: any, action: PayloadAction<any>) => {
            state.currentLang = action.payload;
        }
    }
})

export const currentLang = (state: any) => state.lang.currentLang;
export const {changeLang} = langSlice.actions;