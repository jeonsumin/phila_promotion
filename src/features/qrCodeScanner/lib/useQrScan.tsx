import {useEffect, useRef, useState} from "react";
import QrScanner from "qr-scanner";
import {createScanner} from "shared/utils/utils";
import {useModal} from "shared/config/ModalProvider";

export const useQrScan = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scannerRef = useRef<QrScanner | null>(null);

    const modal = useModal();

    const [isScan, setIsScan] = useState(false);

    useEffect(() => {

        if (videoRef.current)
            scannerRef.current = createScanner(videoRef.current, {
                highlightScanRegion: false,
                onDecode: (result, scannr) => {
                    //TODO: QR CODE RESULT 처리하기
                    if (result.data == 'http://naver.com') {
                        modal.showAlert({
                            title: "미션 성공",
                            message: "스탬프 미션을 성공하셨습니다!",
                            onConfirm: () => {
                                modal.allClear()
                            }
                        })
                        scannr.stop();
                    }
                }
            })

        scannerRef.current?.start();


        return () => {
            scannerRef.current?.stop();
        }
    }, []);

    return {videoRef, isScan}
}