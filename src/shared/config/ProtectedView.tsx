import {Navigate, Outlet} from "react-router-dom";
import {getCookie} from "shared/utils"
import {ROUTES} from "./routes";

export const ProtectedView = () => {
    const isCheckIn = getCookie('user');

    return isCheckIn ? <Outlet/> : <Navigate to={ROUTES.CHECK_IN} replace/>;
};
