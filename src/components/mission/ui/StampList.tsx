import {useMission} from "components/mission";
import {Button} from "shared/ui";

export const StampList = () => {
    const {stamp} = useMission();

    return (
        <div className="w-full sticky h-[248px]">
            {/*
            <div
                className={`absolute w-full h-full left-0 right-0 bg-black/80  backdrop-blur-xs flex justify-center items-center `}>
                <div className={"w-full px-5"}>
                    <Button>미션 성공</Button>
                </div>
            </div>
            */}
            <div
                className="flex flex-col justify-center items-center bg-gray-500 bg-[url(/assets/images/stamp_bg.png)] bg-no-repeat bg-cover gap-4 py-5">
                <div className="flex gap-5">
                    <img
                        src={`/assets/images/img_stamp_01_${stamp?.find((f: any) => f.MISSION === "mission1") ? 'on' : 'off'}.svg`}
                        alt="stamp_bg"/>
                    <img
                        src={`/assets/images/img_stamp_02_${stamp?.find((f: any) => f.MISSION === "mission2") ? 'on' : 'off'}.svg`}
                        alt="stamp_bg"/>
                    <img
                        src={`/assets/images/img_stamp_03_${stamp?.find((f: any) => f.MISSION === "mission3") ? 'on' : 'off'}.svg`}
                        alt="stamp_bg"/>
                </div>
                <div className="flex gap-5">
                    <img
                        src={`/assets/images/img_stamp_04_${stamp?.find((f: any) => f.MISSION === "mission4") ? 'on' : 'off'}.svg`}
                        alt="stamp_bg"/>
                    <img
                        src={`/assets/images/img_stamp_05_${stamp?.find((f: any) => f.MISSION === "mission5") ? 'on' : 'off'}.svg`}
                        alt="stamp_bg"/>
                </div>
            </div>
        </div>
    )
}
