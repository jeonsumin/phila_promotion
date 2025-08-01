import {Button} from "shared/ui";
import {CheckInForm} from "features/checkIn";
import {useModal} from "shared/config/ModalProvider";

type Props = {
    isPreRegistration: number;
}
export const CheckInButton = (props: Props) => {
    const {isPreRegistration} = props;
    const {showModal} = useModal();

    const openModal = () => {
        showModal({
            title: isPreRegistration == 0 ? '사전등록하기' : '체크인',
            body: <CheckInForm/>,
        })
    }



    return (
        <Button variant="fixed" onClick={openModal}>
            {isPreRegistration == 0 ? '사전등록하기' : '체크인'}
        </Button>
    )
}