import {useMission} from "components/mission";
import {Button} from "shared/ui";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {ROUTES} from "shared/config/routes";
import {useEffect} from "react";

export const StampList = () => {
    const {stamp} = useMission();
    const t = useSelector(currentTranslation);

    return (
        <div className="w-full sticky h-[245px]">

            {stamp?.filter(ex => ex.MISSION !== 'bonus')?.length == 5 && <div
                className={`absolute w-full h-full left-0 right-0 bg-black/80  backdrop-blur-xs flex justify-center items-center `}>
                <div className={"w-full px-5"}>
                    <Button
                        variant="label"
                        color='none'
                        className={" mx-auto"}
                        url={ROUTES.COUPON}>
                        <span
                            className="border-b"
                        >{t('stamp_success')}
                        </span>
                    </Button>
                </div>
            </div>
            }

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
