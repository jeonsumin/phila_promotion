import {useEffect, useRef, useState} from "react";
import {TERMS} from "shared/constant/terms";
import {ROUTES} from "shared/config/routes";
import {joinUser} from "entities/user";
import {useNavigate} from "react-router-dom";
import {useModal} from "shared/config/ModalProvider";
import {getCookie} from "shared/utils";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {preCheckIn} from "entities/user/api/userApi";

export const useCheckIn = () => {
    const isPreRegistration = useSelector((state: RootState) => state.period.isEventPeriod);
    const t = useSelector(currentTranslation);

    const modal = useModal();
    const navigate = useNavigate();

    const input2 = useRef<HTMLInputElement>(null)
    const input3 = useRef<HTMLInputElement>(null)

    const [currentTerms, setCurrentTerms] = useState<any>(null)
    const [checkInForm, setCheckInForm] = useState<any>({
        nick_name: '',
        phone1: '',
        phone2: '',
        phone3: '',
        allChecked: false,
        terms1: false,
        terms2: false,
    })

    /**
     * 체크인
     */
    const onSubmit = async () => {
        const ph = [checkInForm.phone1, checkInForm.phone2, checkInForm.phone3].join('-')
        const user = {...checkInForm, phone_num: ph, step: 1};

        if (isPreRegistration == 0) {
            const preRegistration = await preCheckIn(user);
            modal.allClear();


            if (preRegistration == 2) {
                modal.showAlert({
                    title: t("pre_main_mo_001_1"),
                    message: t('pop_open_chk_mo_010'),
                })
                return;
            }

            modal.showAlert({
                title: t("pre_main_mo_001_1"),
                message: t(`pop_preo_chk_mo_012`),
                onConfirm: () => {
                    modal.allClear();
                }
            })
            return
        }

        const checkIn = await joinUser(user);

        if (checkIn == 2) {
            modal.showAlert({
                message: t('pop_preo_chk_mo_013'),
                isCancel: true,
                onConfirm: () => {
                    const alreadyCheckIn = {...user, step: 2}
                    joinUser(alreadyCheckIn)
                    modal.allClear();
                    navigate(ROUTES.HOME);
                }
            })
        } else {
            modal.allClear();
            navigate(ROUTES.HOME);
        }
    }

    /**
     * 체크인 정보 설정
     */
    const setCheckInFrom = (key: string, value: any) => {
        setCheckInForm((prev: any) => ({...prev, [key]: value}));
    }

    /**
     * 전체 동의 핸들러
     * @param isChecked
     */
    const handleAllCheck = (isChecked: boolean) => {
        setCheckInFrom('terms1', isChecked);
        setCheckInFrom('terms2', isChecked);
        setCheckInFrom('allChecked', isChecked);
    };

    /**
     * 약관 상세보기 액션
     */
    const onDetailTerms = (target: number | null) => {
        if (target == null) return setCurrentTerms(null)

        setCurrentTerms(TERMS.find(f => f.id === target)!)
    }

    /**
     * 유효성 검사
     */
    const validation = () => {
        const {
            nick_name, phone1, phone2, phone3, terms1, terms2
        } = checkInForm

        return (
            nick_name !== '' &&
            phone1 !== '' &&
            phone2 !== '' &&
            phone3 !== '' &&
            terms1 &&
            terms2
        )
    }

    useEffect(() => {
        setCheckInFrom('allChecked', checkInForm.terms1 && checkInForm.terms2)
    }, [checkInForm.terms1, checkInForm.terms2]);

    return {
        checkInForm
        , currentTerms
        , input2
        , input3
        , onSubmit
        , setCheckInFrom
        , validation
        , handleAllCheck
        , onDetailTerms
    }
}