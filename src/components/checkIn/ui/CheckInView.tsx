import {cn} from "shared/utils";
import {ChangeLangButton, currentTranslation} from "features/changeLang";
import {AlreadyCheckInButton} from "features/checkIn/ui/AlreadyCheckInButton";
import {useSelector} from "react-redux";

export const CheckInView = () => {
    const t = useSelector(currentTranslation);
    return (
        <main
            className={cn(
                "flex flex-col gap-10 items-center overflow-auto  relative scrollbar-hide h-full w-full",
                "bg-[url('/assets/images/checkIn_bg.png')] bg-cover bg-no-repeat"
            )}
        >

            <div className="p-2">
                <ChangeLangButton/>
            </div>

            <div className="w-full">
                <img src="/assets/images/mascot.png" alt=""/>
            </div>


            <div className="flex flex-col justify-center items-center p-10 text-white text-center space-y-10 ">
                <div className="flex flex-col gap-2">
                    <p> {t("pre_main_mo_003")} {t("pre_main_mo_004")}</p>

                    <div className="flex justify-center w-full mx-auto text-3xl font-bold">
                        <p>{t('open_main_mo_005')}</p>
                        <p className="text-[#32833A]">2</p>
                        <p className="text-[#D93657]">0</p>
                        <p className="text-[#D3A117]">2</p>
                        <p className="text-[#107CBA]">5</p>
                    </div>
                </div>

                <AlreadyCheckInButton/>

            </div>
        </main>
    )
}