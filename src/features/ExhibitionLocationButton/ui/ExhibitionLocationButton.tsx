import {Button} from "shared/ui";
import {useModal} from "shared/config/ModalProvider";
import {PlaceLocationView} from "shared/ui/spaceView/PlaceLocationView";
import {ReactNode} from "react";

type Props = {
    label?: string;
    title?: string;
    subTitle?: string;
    position?: string;
    children?: ReactNode
}
export const ExhibitionLocationButton = (props: Props) => {
    const {label = "위치보기", title = "", subTitle = "", children} = props;
    const {showAlert} = useModal();
    const openModal = () => {
        showAlert({
            title: title,
            message: subTitle,
            children: <PlaceLocationView/>,
        })
    }
    return (
        <Button variant="label" color='white' onClick={openModal}>
            {children ? children : <>
                <img src={'/assets/images/icon/icn_location.svg'} alt="location"/>
                <span className="border-b">{label}</span>
            </>}
        </Button>
    )
}