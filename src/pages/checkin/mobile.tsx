import {CheckIn} from "components/checkIn";
import {useLayout} from "shared/ui/layout/useLayout";
import {useSelector} from "react-redux";
import {FinishedEvent} from "pages/finish";

export const BetaCheckInScreen = () => {
    const eventPeriod = useSelector((state: RootState) => state.period.isEventPeriod);
    useLayout()

    if (eventPeriod == 2) return <FinishedEvent/>
    return <CheckIn/>;
}