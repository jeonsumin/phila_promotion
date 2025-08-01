import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getInitialLang, translations} from "../model/langAction";

const initialState: any = {
    currentLang: getInitialLang()
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state: any, action: PayloadAction<any>) => {
            state.currentLang = action.payload;
            localStorage.setItem('lang', action.payload);
        }
    }
})

export const currentLang = (state: RootState) => state.lang.currentLang;
export const {changeLang} = langSlice.actions;
export const currentTranslation = createSelector([currentLang], (lang: any) => {
    const translation = translations[lang];
    return (key:any) => translation[key] || key;
})
