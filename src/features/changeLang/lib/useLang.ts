import {useDispatch, useSelector} from "react-redux";
import {changeLang, currentLang} from "../model/slice";
import {AppDispatch} from "app/store";
import {ChangeEvent, useCallback} from "react";

export const useLang = () => {
    const lang = useSelector(currentLang)
    const dispatch: AppDispatch = useDispatch();


    const changeAction = useCallback((lang: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLang(lang.target.value))
    }, [])

    return {lang, changeAction}

}
