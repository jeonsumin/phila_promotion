import {useEffect, useState} from "react";
import {updateUseCoupon} from "entities/coupon";
import {useModal} from "shared/config/ModalProvider";


export const useOtp = () => {
    const OPT_PASSWORD = "0000";
    const [otp, setOtp] = useState("");
    const [isFailed, setIsFailed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const modal = useModal();

    const onChange = (otp: string) => {
        setOtp(otp);
    }

    const onSubmit = async (code: string) => {
        await updateUseCoupon(code);
        modal.allClear();
    }
    useEffect(() => {
        setIsActive(otp.length == 4)
        if (otp.length == 4) {
            setIsFailed(OPT_PASSWORD !== otp)
        } else {
            setIsFailed(false)
        }
    }, [otp]);

    return {otp, isActive, isFailed, onChange, onSubmit,}
}