import {useEffect, useRef, useState} from "react";
import {checkInUserCheck} from "entities/user/api/userApi";
import {ROUTES} from "shared/config/routes";
import {useNavigate} from "react-router-dom";
import {useModal} from "shared/config/ModalProvider";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const useAlreadyCheckin = () => {
    const t = useSelector(currentTranslation);
    const [failedCheckIn, setFailedCheckIn] = useState(false);
    const navigate = useNavigate();
    const modal = useModal();

    const input2 = useRef<HTMLInputElement>(null)
    const input3 = useRef<HTMLInputElement>(null)

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

    return {t, phoneNum, input2, input3, failedCheckIn, setForm, onSubmit}
}