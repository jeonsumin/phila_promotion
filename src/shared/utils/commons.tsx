import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updatePeriod} from "features/period";
import {getCookie} from "shared/utils/cookies";
import {ROUTES} from "shared/config/routes";

export const Commons = () => {
    const dispatch: AppDispatch = useDispatch();

    const {pathname} = useLocation();
    const navigate = useNavigate();

    const topScroll = () => {
        const scrollableMain = document.querySelector("main.scrollbar"); // 클래스명 기준으로 선택

        dispatch(updatePeriod());

        if (scrollableMain) {
            scrollableMain.scrollTo(0, 0);
        } else {
            console.warn("scrollable <main> not found, fallback to window");
            window.scrollTo(0, 0); // fallback (필요시)
        }
    }
    useEffect(() => {
        topScroll();
        const user = getCookie("user")
        if (!user) navigate(ROUTES.CHECK_IN);
    }, [pathname]);

    return null;
}
