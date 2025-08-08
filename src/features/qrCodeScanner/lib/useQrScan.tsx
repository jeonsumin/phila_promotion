import {useEffect, useRef, useState} from "react";
import QrScanner from "qr-scanner";
import {createScanner} from "shared/utils/utils";
import {useModal} from "shared/config/ModalProvider";
import {checkStamp} from "entities/stamp";
import {insertCoupon} from "entities/coupon";

export const useQrScan = (props: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scannerRef = useRef<QrScanner | null>(null);
    const modal = useModal();

    const [isScan, setIsScan] = useState(false);

    const onDecode = async (result: any, scannr: any) => {

        const resultUrl = new URL(result.data).searchParams;
        const param = resultUrl.get('stamp');

        if (param) {
            await checkStamp(param);
            scannr.stop();
        } else {
            const treasure = resultUrl.get('treasure')
            const idx = resultUrl.get('idx')

            if (Number(props.treasure) == Number(treasure) && Number(props.hint) === Number(idx)) {
                setIsScan(true);
                await insertCoupon("4");
                scannr.stop();
            } else {
                scannr.stop();
                modal.showAlert({
                    title: '잘못된 QR입니다.',
                    message: '다시 스캔해 주세요',
                    onConfirm: () => {
                        modal.alertClose();
                        scannr.start()
                    }
                })
            }
        }

    }

    useEffect(() => {

        if (videoRef.current)
            scannerRef.current = createScanner(videoRef.current, {
                highlightScanRegion: false,
                onDecode: (result, scannr) => onDecode(result, scannr)
            })

        scannerRef.current?.start();


        return () => {
            scannerRef.current?.stop();
        }
    }, []);

    return {videoRef, isScan}
}