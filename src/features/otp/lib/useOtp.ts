import {useEffect, useState} from "react";
import {fetchCoupon, updateUseCoupon} from "entities/coupon";
import {useModal} from "shared/config/ModalProvider";
import {useDispatch} from "react-redux";


export const useOtp = () => {
    const OPT_PASSWORD = "2025";
    const [otp, setOtp] = useState("");
    const [isFailed, setIsFailed] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const dispatch: AppDispatch = useDispatch();

    const modal = useModal();

    const onChange = (otp: string) => {
        setOtp(otp);
    }

    const onSubmit = async (code: string) => {
        await updateUseCoupon(code);
        dispatch(fetchCoupon());
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