import {Button} from "shared/ui";
import {CheckInForm} from "features/checkIn";
import {useModal} from "shared/config/ModalProvider";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

type Props = {
    isPreRegistration: number;
}
export const CheckInButton = (props: Props) => {
    const t = useSelector(currentTranslation);
    const {isPreRegistration} = props;
    const {showModal} = useModal();

    const openModal = () => {
        showModal({
            title: isPreRegistration == 0 ? t('pre_main_pc_007') : t('open_main_mo_004'),
            body: <CheckInForm/>,
        })
    }



    return (
        <Button variant="fixed" onClick={openModal} className="text-[18px]">
            {isPreRegistration == 0 ? t('pre_main_pc_007') : t('open_main_mo_004')}
        </Button>
    )
}