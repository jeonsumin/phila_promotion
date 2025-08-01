import {UseCheckInPeriod} from "features/checkIn";
import {PreRegistration} from "components/checkIn/ui/PreRegistration";
import {CheckInView} from "components/checkIn/ui/CheckInView";
import {CheckInButton} from "features/checkIn/ui/CheckInButton";

export const CheckIn = () => {

    const {isPreRegistration} = UseCheckInPeriod();

    return (
        <div className="w-full min-h-[100dvh] text-[var(--bk)] bg-[var(--bk)]">
            <div className="max-w-[var(--maxWidth)] h-[100dvh] mx-auto flex flex-col relative ">
                {isPreRegistration == 0 ? <PreRegistration/> : <CheckInView/>}

                <CheckInButton isPreRegistration={isPreRegistration}/>
            </div>
        </div>
    )
}