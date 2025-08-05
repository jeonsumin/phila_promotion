import {Button} from "shared/ui";
import {useModal} from "shared/config/ModalProvider";
import {QrScanner} from "features/qrCodeScanner";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const QrScannerButton = () => {
    const t = useSelector(currentTranslation)
    const modal = useModal();

    const onClick = () => {
        modal.showModal({
            title: t("stamp_detail_031"),
            body: <QrScanner />
        })
    }

    return (
        <div className="w-full p-5">
            <Button onClick={onClick}>{t("stamp_detail_031")}</Button>
        </div>
    )
}