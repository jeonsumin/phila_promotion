import {useQrScan} from "features/qrCodeScanner/lib/useQrScan";
import {QrSuccess} from "features/qrCodeScanner/ui/QrSuccess";

export const QrScanner = (props: any) => {
    const {videoRef, isScan} = useQrScan({...props});

    return (<>
            <div className="flex flex-col w-full justify-center bg-black/70 items-center" style={{height: 'calc(100dvh - 70px)'}}>
                {isScan && <QrSuccess/>}

                <div className="flex w-full h-[360px] justify-center ">
                    <video ref={videoRef} style={{objectFit: 'cover', width: '100%', height: '100%'}}></video>
                </div>

            </div>
        </>
    )
}