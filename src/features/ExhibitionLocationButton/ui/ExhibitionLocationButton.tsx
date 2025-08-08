import {Button} from "shared/ui";
import {useModal} from "shared/config/ModalProvider";
import {PlaceLocationView} from "shared/ui/spaceView/PlaceLocationView";
import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

type Props = {
    label?: string;
    title?: string;
    subTitle?: string;
    position?: string;
    children?: ReactNode;
    className?: string;
}
export const ExhibitionLocationButton = (props: Props) => {
    const t = useSelector(currentTranslation);
    const {label = t("stamp_main_010"), title = "", subTitle = "", children, className} = props;
    const {showAlert} = useModal();
    const openModal = () => {
        showAlert({
            title: title,
            message: subTitle,
            children: <PlaceLocationView/>,
        })
    }
    return (
        <Button variant="label" color='white' onClick={openModal} className={className}>
            {children ? children : <>
                <img src={'/assets/images/icon/icn_location.svg'} alt="location"/>
                <span className="border-b">{label}</span>
            </>}
        </Button>
    )
}