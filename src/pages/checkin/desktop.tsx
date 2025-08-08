import {useCheckInPeriod} from "features/checkIn";
import {DesktopCheckIn} from "components/checkIn";
import {useSelector} from "react-redux";
import {currentLang, currentTranslation} from "features/changeLang/model/slice";
import {useExhibition} from "components/place";
import {Button} from "shared/ui";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {PlaceCard} from "shared/ui/placeCard";
import {TIME_TABLE} from "shared/constant/timetable";
import {Image} from "shared/ui/image";

export const BetaCheckInPage = () => {

    const {isPreRegistration} = useCheckInPeriod();
    const lang = useSelector(currentLang);
    const t = useSelector(currentTranslation);
    const {exhibition, currentExhibitionCode, selectedExhibition, onClick} = useExhibition()


    if (isPreRegistration == 0) return <DesktopCheckIn/>

    return (
        <>

            <div className="flex flex-col justify-center items-center mx-auto overflow-y-auto">
                <img src={`/assets/images/home/${lang}/bg_main_pc.png`} alt=""/>


                <section className="flex flex-col text-center gap-10 mx-30 py-30  max-w-[960px]">

                    <h1 className="text-black text-4xl font-bold ">
                        {t("home_main_001")}
                    </h1>

                    <div className="flex flex-col gap-3.5">
                        <p> {t("home_main_002")} </p>
                        <p> {t("home_main_003")} </p>
                    </div>

                </section>

                <section className="flex flex-col text-center gap-10 bg-[#FFEDF1] w-full py-[60px] ">

                    <h1 className="text-3xl font-bold text-[var(--primary)]">
                        {t("home_main_011")}
                    </h1>

                    <img src={`/assets/images/home/${lang}/bg_operation_pc.png`} alt="opreration_pc"
                         className=" max-w-[960px] mx-auto"/>

                    <h1 className="text-3xl font-bold text-[var(--primary)]">
                        {t("home_main_004")}
                    </h1>

                    <div className=" max-w-[960px] mx-auto">
                        <SwiperView
                            data={TIME_TABLE(lang)}
                            renderItem={Image}
                        />
                    </div>
                </section>

                <section className="flex flex-col text-center gap-10 w-full py-[60px] max-w-[960px] mx-auto">

                    <div className="flex flex-col w-full justify-center items-center gap-5 px-[20px]">
                        <h2 className="self-center text-3xl border-[var(--point)] text-[var(--point)] font-bold"> {t("home_main_space_001")}</h2>

                        <div className="grid grid-cols-3 w-full gap-[6px] text-white">
                            {
                                exhibition.map((place, index) =>
                                    <Button
                                        key={index}
                                        color={place.isActive ? 'default' : 'light'}
                                        onClick={() => onClick(place.code)}
                                        className="font-normal"
                                    >
                                        {t(place.title)}
                                    </Button>
                                )
                            }
                        </div>
                    </div>

                </section>
                <div className="flex flex-col py-10 w-full">
                    <SwiperView
                        pagination={true}
                        className={"h-full"}
                        slidesPerView={3}
                        data={selectedExhibition}
                        target={currentExhibitionCode}
                        renderItem={PlaceCard}
                    />
                </div>
            </div>


            <footer className="flex w-full bg-[#F0F0F0] py-10 justify-center">
                <div className="flex px-50 gap-2.5">
                    <div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_001')}</p>
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_002')}</p>
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_003')}</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-3.5">
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_004')}</p>
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_005')}</p>
                            <p className="text-sm text-[var(--subTxt)]">{t('footer_pc_006')}</p>
                        </div>
                    </div>
                    <div className="flex gap-[16px] items-start justify-start">
                        <button onClick={() => {
                            window.open("http://kr.philakorea2025.kr/ ", "_blank")
                        }} className="w-[48px]">
                            <img src="/assets/images/icon/sns_share_1.svg" alt=""/>
                        </button>
                        <button onClick={() => {
                            window.open("https://www.youtube.com/channel/UCw3-jbBEWVitgOFHutWZmug", "_blank")
                        }} className="w-[48px]">
                            <img src="/assets/images/icon/sns_share_2.svg" alt=""/>
                        </button>
                        <button onClick={() => {
                            window.open("https://blog.naver.com/posastamp", "_blank")
                        }} className="w-[48px]">
                            <img src="/assets/images/icon/sns_share_3.svg" alt=""/>
                        </button>
                        <button onClick={() => {
                            window.open("https://www.instagram.com/korea.stamp/", "_blank")
                        }} className="w-[48px]">
                            <img src="/assets/images/icon/sns_share_4.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
};
