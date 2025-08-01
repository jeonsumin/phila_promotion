import {useQrScan} from "features/qrCodeScanner/lib/useQrScan";

export const QrScanner = () => {
    const {videoRef, isScan} = useQrScan();

    return (
        <div className="flex flex-col w-full h-[100vh] justify-center bg-black/70">
            <video ref={videoRef} className="w-full"></video>
        </div>
    )
}