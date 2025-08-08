import {AppDispatch} from "app/store";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setMobileHeader} from "app/layout/layout";

type Props = {
    headerComponentName?: string;
    routeName?: string;
    hasFooter?: boolean;
    hasHeader?: boolean;
    referrer?: string;
}
export const useLayout = (props?: Props) => {

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(setMobileHeader({
            headerComponentName: props?.headerComponentName,
            routeName: props?.routeName,
            hasFooter: props?.hasFooter,
            hasHeader: props?.hasHeader,
            referrer: props?.referrer,
        }))
    }, []);

}