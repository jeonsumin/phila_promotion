import {useSelector} from "react-redux";

export const useCheckInPeriod = () => {

    const isPreRegistration = useSelector((state: RootState) => state.period.isEventPeriod);
    return {isPreRegistration}
}