import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'
import QrScanner from "qr-scanner";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const transformToQKeys = (input: Record<number, any>) => {
    return Object.fromEntries(
        Object.entries(input).map(([key, value]) => {
            const transformedValues = value.map((v: any) => v + 1).join(",");
            return [`q${Number(key) + 1}`, transformedValues];
        })
    );
}


export const createScanner = (
    videoElement: HTMLVideoElement,
    {
        onDecodeError = () => {
        }
        , highlightScanRegion = true
        , onDecode = (_: QrScanner.ScanResult, __: QrScanner
    ) => {}}
) => {
    const qrScanner: QrScanner = new QrScanner(videoElement, (result) => onDecode(result, qrScanner), {
        highlightScanRegion,
        onDecodeError,
        highlightCodeOutline: true,
    });

    qrScanner.setInversionMode('both');

    // return {
    //     start: () => qrScanner.start(),
    //     stop: () => qrScanner.stop(),
    // };

    return qrScanner;
}
