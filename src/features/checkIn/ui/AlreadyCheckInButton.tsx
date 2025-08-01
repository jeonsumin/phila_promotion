import {Button} from "shared/ui";
import {AlreadyCheckFrom, useAlreadyCheckin} from "features/checkIn";
import {useModal} from "shared/config/ModalProvider";

export const AlreadyCheckInButton = () => {
    const alreadyCheck = useAlreadyCheckin();

    const modal = useModal();

    const alreadyCheckIn = () => {
        modal.showAlert({
            message: "",
            children: <AlreadyCheckFrom />,
            onConfirm: alreadyCheck.onSubmit
        })
    }
    return (

        <Button
            variant="label"
            color="none"
            className="font-normal underline-offset-3 underline"
            onClick={alreadyCheckIn}
        >
            이미 사전등록을 완료했어요!
        </Button>
    )
}