import {useLayout} from "shared/ui/layout/useLayout";
import {useParams} from "react-router-dom";
import {MISSION} from "shared/constant/mession";
import {QrScannerButton} from "features/qrCodeScanner";

export const MissionPage = () => {
    const {target} = useParams();
    const mission = MISSION.find(ex => ex.code === target);

    useLayout({
        routeName: mission?.contents,
        hasFooter: false,
    })

    return (
        <>
            <div className="w-full h-60 bg-gray-500">
            </div>

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">

                <h1 className="text-xl font-bold text-[var(--phliaBlue)] leading-10">Mission</h1>

                <div
                    className=" flex flex-col bg-white rounded-lg w-full justify-center items-centerpx-[20px] text-center px-10">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>{mission?.caption}</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">체험 방법</h1>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col px-[20px]">
                    {
                        mission?.step.map((step: string,index:number) => <div key={index}
                                className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full text-center">
                                <div className="w-20">
                                    <p
                                        className="text-sm font-bold bg-[var(--primary)] text-center py-[10px] rounded-full text-white">STEP.{index + 1}
                                    </p>
                                </div>
                                <p>{step}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <QrScannerButton/>

        </>
    )
}