import {ChangeLangButton} from "features/changeLang";
import {cn} from "shared/utils";
import {currentTranslation} from "features/changeLang/model/slice";
import {useSelector} from "react-redux";

export const PreRegistration = () => {
    const t = useSelector(currentTranslation);
    return (
        <main
            className={cn(
                "flex flex-col gap-10 items-center overflow-auto h-full relative scrollbar-hide py-10 bg-no-repeat bg-cover space-y-10",
                `bg-[url('/assets/images/betacheckin_bg.png')]`
            )}
        >
            <ChangeLangButton/>

            <div className="mx-auto text-center">
                <img
                    src="/assets/images/checkin_logo_pc.svg"
                    alt="logo"
                    className="w-[176px] mx-auto mt-5.5"
                />
            </div>

            <div className="flex flex-col items-center gap-10 text-center">
                <h2 className="text-3xl text-[var(--white)] font-bold leading-none">{t('pre_main_mo_001')}</h2>
                <p
                    className="text-6xl text-[var(--white)] font-bold leading-none [text-shadow:_0px_0px_10px_rgb(16_124_186_/_1.00)]"
                >OPEN</p>
                <p className="text-base text-[var(--subWhite)]">2025.9.17. ~ 9.21. <br/> COEX 마곡</p>
            </div>

            <div className="w-full relative px-5">
                        <span
                            className="absolute top-[-30px] left-1/2 translate-x-[-50%] w-[200px] h-[60px] bg-[var(--blue)] text-[var(--white)] font-bold flex items-center justify-center rounded-[60px] text-[28px]">
                            EVENT
                        </span>

                <div className="pt-16.5 px-5 pb-[40px] bg-[var(--dimm)] text-center">
                    <img src="/assets/images/icon/img_pre_gift.svg" alt="" className="w-[100px] mx-auto"/>
                    <p className="font-bold mt-[40px] text-[28px] text-[var(--yellow)]">특별 리워드 증정!</p>
                    <p className="text-[20px] text-[var(--subWhite)] mt-[12px]">사전등록 + 현장방문시</p>
                </div>
            </div>


        </main>
    )
}
