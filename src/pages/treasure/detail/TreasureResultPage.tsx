import {useLayout} from "shared/ui/layout/useLayout";
import {useParams} from "react-router-dom";
import {TREASURE} from "shared/constant/treasure";
import {QrScannerButton} from "features/qrCodeScanner";

export const TreasureResultPage = () => {

    const {id} = useParams();
    const randomHint = Math.floor(Math.random() * TREASURE[Number(id)].option.length);

    useLayout({
        routeName: '보물찾기',
        hasFooter: false
    })

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="py-10 px-5">
                <h1 className="text-base font-normal text-[var(--subTxt)]">{TREASURE[Number(id)].title} 주제를 고르셨네요!</h1>
            </div>

            <div className="w-full bg-[var(--listBd)] px-12 py-5">
                <img src={TREASURE[Number(id)].src} alt=""/>
            </div>

            <div className="flex flex-col px-5 py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">

                <h1 className="text-xl font-bold text-[var(--phliaBlue)] leading-10">HINT</h1>

                <div
                    className=" flex flex-col bg-white rounded-lg w-full justify-center items-centerpx-[20px] text-center p-5">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-[var(--lightGrayBg)] w-full">
                        <p className="text-base">
                            {TREASURE[Number(id)].option[randomHint].hint}
                        </p>
                        <p className="text-[var(--phliaBlue)]">{TREASURE[Number(id)].option[randomHint].number}</p>
                    </div>

                </div>
            </div>

            <QrScannerButton/>
        </div>
    )
}