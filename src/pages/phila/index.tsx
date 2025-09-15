import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {checkStamp} from "entities/stamp";
import {ROUTES} from "shared/config/routes";

export const Phila = () => {
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const param = searchParam.get("stamp");
        if (param) {
            checkStamp(param).then(res => {
                navigate(ROUTES.STAMP)
            });
        }
    }, []);
    return null
}