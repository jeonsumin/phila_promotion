import {useEffect, useState} from "react";
import {checkInUserCheck} from "entities/user/api/userApi";
import {ROUTES} from "shared/config/routes";
import {useNavigate} from "react-router-dom";
import {useModal} from "shared/config/ModalProvider";

export const useAlreadyCheckin = () => {
    const [failedCheckIn, setFailedCheckIn] = useState(false);
    const navigate = useNavigate();
    const modal = useModal();
    const [phoneNum, setPhoneNum] = useState<any>({
        phone1: '',
        phone2: '',
        phone3: '',
    })

    const onSubmit = async () => {
        const ph = Object.values(phoneNum).join('-')
        const user = {phone_num: ph};
        const result = await checkInUserCheck(user);
        if (result == 1) {
            setFailedCheckIn(true);
            return
        }

        modal.alertClose();
        navigate(ROUTES.HOME);
    }

    const setForm = (key: string, value: any) => {
        setPhoneNum((prev: any) => ({...prev, [key]: value}));
    }

    useEffect(() => {
        setFailedCheckIn(false);
    }, [phoneNum]);
    return {phoneNum, failedCheckIn, setForm, onSubmit}
}