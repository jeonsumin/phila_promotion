import {useEffect, useRef, useState} from "react";
import QrScanner from "qr-scanner";
import {createScanner} from "shared/utils/utils";
import {useModal} from "shared/config/ModalProvider";
import {checkStamp} from "entities/stamp";
import {insertCoupon} from "entities/coupon";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {useTimer} from "shared/utils/useTimer";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {TREASURE} from "shared/constant/treasure";
import {updateTreasure} from "entities/treasure/api/TreasureApi";

export const useQrScan = (props: any) => {
    const t = useSelector(currentTranslation);
    const videoRef = useRef<HTMLVideoElement>(null);
    const scannerRef = useRef<QrScanner | null>(null);
    const {setTimer} = useTimer();
    const modal = useModal();
    const navigate = useNavigate();

    const [isScan, setIsScan] = useState(false);

    const onDecode = async (result: any, scannr: any) => {

        const resultUrl = new URL("https://" + result.data).searchParams;
        const param = resultUrl.get('stamp');

        console.log('resultUrl ', resultUrl)

        if (param) {
            scannr.stop();
            await checkStamp(param);
            modal.showAlert({
                title: t('pop_stamp_qr_001'),
                message: t('pop_stamp_qr_002'),
                onConfirm: () => {
                    modal.allClear();
                    navigate(ROUTES.STAMP)
                }
            })
        } else {
            const treasure = resultUrl.get('treasure')
            const idx = resultUrl.get('idx')
            const type = t(TREASURE.find(ex => ex.id == Number(treasure))?.title)

            if (Number(props.treasure) == Number(treasure) && Number(props.hint) === Number(idx)) {
                setIsScan(true);
                await insertCoupon("4");
                await updateTreasure(type);
                scannr.stop();
            } else {
                scannr.stop();
                modal.showAlert({
                    title: t('pop_stamp_qr_error_001'),
                    message: t('pop_stamp_qr_error_002'),
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

        setTimer(() => {
            scannerRef.current?.start();
        }, 200)


        return () => {
            scannerRef.current?.stop();
        }
    }, []);

    return {videoRef, isScan}
}