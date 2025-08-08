import {useQrScan} from "features/qrCodeScanner/lib/useQrScan";
import {QrSuccess} from "features/qrCodeScanner/ui/QrSuccess";

export const QrScanner = (props: any) => {
    const {videoRef, isScan} = useQrScan({...props});

    return (<>
            <div className="flex flex-col w-full h-[100vh] justify-center bg-black/70 ">
                {isScan && <QrSuccess/>}

                <video ref={videoRef} className="w-full"></video>
            </div>
        </>
    )
}