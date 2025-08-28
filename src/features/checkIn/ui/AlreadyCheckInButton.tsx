import {Button} from "shared/ui";
import {AlreadyCheckFrom, useAlreadyCheckin} from "features/checkIn";
import {useModal} from "shared/config/ModalProvider";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const AlreadyCheckInButton = () => {
    const alreadyCheck = useAlreadyCheckin();
    const t = useSelector(currentTranslation);

    const modal = useModal();

    const alreadyCheckIn = () => {
        modal.showAlert({
            message: "",
            children: <AlreadyCheckFrom />,
            onConfirm: alreadyCheck.onSubmit,
            isConfirm: true,
        })
    }
    return (

        <Button
            variant="label"
            color="none"
            className="font-normal underline-offset-3 underline !text-base"
            onClick={alreadyCheckIn}
        >
            {t('pop_open_chk_mo_010')}
        </Button>
    )
}