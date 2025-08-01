import {useMission} from "components/mission";

export const StampList = () => {
    const {stamp} = useMission();

    return (
        <div
            className="flex flex-col wfull justify-center items-center bg-gray-500 bg-[url(/assets/images/stamp/stamp_bg.png)] bg-no-repeat bg-cover gap-4 py-5">
            <div className="flex gap-5">
                <img src={`/assets/images/stamp/stamp_1_${stamp?.find((f: any) =>f.MISSION === "mission1" ) ? 'on' : 'off'}.svg`} alt="stamp_bg"/>
                <img src={`/assets/images/stamp/stamp_2_${stamp?.find((f: any) =>f.MISSION === "mission2" ) ? 'on' : 'off'}.svg`} alt="stamp_bg"/>
                <img src={`/assets/images/stamp/stamp_3_${stamp?.find((f: any) =>f.MISSION === "mission3" ) ? 'on' : 'off'}.svg`} alt="stamp_bg"/>
            </div>
            <div className="flex gap-5">
                <img src={`/assets/images/stamp/stamp_4_${stamp?.find((f: any) =>f.MISSION === "mission4" ) ? 'on' : 'off'}.svg`} alt="stamp_bg"/>
                <img src={`/assets/images/stamp/stamp_5_${stamp?.find((f: any) =>f.MISSION === "mission5" ) ? 'on' : 'off'}.svg`} alt="stamp_bg"/>
            </div>
        </div>
    )
}