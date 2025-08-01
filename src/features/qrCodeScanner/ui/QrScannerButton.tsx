import {Button} from "shared/ui";
import {useModal} from "shared/config/ModalProvider";
import {QrScanner} from "features/qrCodeScanner";

export const QrScannerButton = () => {
    const modal = useModal();

    const onClick = () => {
        modal.showModal({
            title:"QR 코드 스캔",
            body: <QrScanner />
        })
    }

    return (
        <div className="w-full p-5">
            <Button onClick={onClick}>QR코드 스캔</Button>
        </div>
    )
}