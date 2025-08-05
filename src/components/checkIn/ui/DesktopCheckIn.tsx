import {ChangeLangButton, currentTranslation} from "features/changeLang";
import {Button} from "shared/ui";
import {useModal} from "shared/config/ModalProvider";
import {CheckInForm} from "features/checkIn";
import {useSelector} from "react-redux";
import {useLayout} from "shared/ui/layout/useLayout";

export const DesktopCheckIn = () => {
    const {showModal} = useModal();
    const t = useSelector(currentTranslation);

    useLayout({
        hasHeader: false,
    })
    const openModal = () => {
        showModal({
            title: t('open_main_mo_004'),
            body: <CheckInForm />,
        })
    }
    return (
        <div className="relative w-full min-h-[100dvh] text-[var(--bk)] flex flex-col items-center justify-center"
             style={{
                 backgroundImage: "url('/assets/images/betacheckin_bg_pc.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
             }}
        >
            <main
                className="w-[var(--pcContentWidth)] mx-auto;] relative pt-[60px] pb-[60px]"
            >
                <img src="/assets/images/checkin_logo_pc.svg" alt="" className="w-[293px] mb-[70px] mx-auto"/>
                <div className="flex flex-col items-center">
                    <h2 className="text-[50px] text-[var(--white)] mb-[28px] leading-none">{t("pre_main_mo_001")}</h2>
                    <p
                        className="text-[100px] text-[var(--white)] font-bold mb-[40px] leading-none"
                        style={{textShadow: "0px 0px 20px #107CBA"}}
                    >OPEN</p>
                    <p className="text-[28px] text-[var(--subWhite)]">{t("pre_main_mo_003")} / {t("pre_main_mo_004")}</p>
                </div>

                <div className="w-full relative  mt-[76px]">
                    <span
                        className="absolute top-[-30px] left-1/2 translate-x-[-50%] w-[200px] h-[60px] bg-[var(--blue)] text-[var(--white)] font-bold flex items-center justify-center rounded-[60px] text-[28px]">EVENT</span>
                    <div className="pt-[70px] px-[20px] pb-[40px] bg-[var(--dimm)] text-center">
                        <img src="/assets/images/icon/img_pre_gift.svg" alt="" className="w-[100px] mx-auto"/>
                        <p className="font-bold mt-[40px] text-[28px] text-[var(--yellow)]">{t("pre_main_mo_006")}</p>
                        <p className="text-[20px] text-[var(--subWhite)] mt-[12px]">{t("pre_main_mo_007")}</p>
                    </div>
                    <Button variant="fixed" onClick={openModal}>
                        {t("pre_main_mo_008")}
                    </Button>
                </div>

            </main>

        </div>
    )
}