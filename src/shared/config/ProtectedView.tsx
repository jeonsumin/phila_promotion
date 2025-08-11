import {Navigate, Outlet} from "react-router-dom";
import {getCookie} from "shared/utils"
import {ROUTES} from "./routes";
import {useSelector} from "react-redux";

export const ProtectedView = () => {
    const isCheckIn = getCookie('user');
    const isPreRegistration = useSelector((state: RootState) => state.period.isEventPeriod);

    if(isPreRegistration == 0 ) return <Navigate to={ROUTES.CHECK_IN} replace/>;

    return isCheckIn ? <Outlet/> : <Navigate to={ROUTES.CHECK_IN} replace/>;
};
