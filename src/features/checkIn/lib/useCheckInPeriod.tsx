import {useSelector} from "react-redux";

export const UseCheckInPeriod = () => {

    const isPreRegistration = useSelector((state: RootState) => state.period.isEventPeriod);
    return {isPreRegistration}
}