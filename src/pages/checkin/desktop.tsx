import {useCheckInPeriod} from "features/checkIn";
import {DesktopCheckIn} from "components/checkIn";
import {useSelector} from "react-redux";
import {currentLang, currentTranslation} from "features/changeLang/model/slice";
import {useExhibition} from "components/place";
import {Button} from "shared/ui";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {PlaceCard} from "shared/ui/placeCard";

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


                <section className="flex flex-col text-center gap-10 mx-30 py-30">

                    <h1 className="text-black text-4xl font-bold ">
                        {t("main_pc_001")}
                    </h1>

                    <div className="flex flex-col gap-3.5">
                        <p> {t("main_pc_002")} </p>
                        <p> {t("main_pc_003")} </p>
                    </div>

                </section>

                <section className="flex flex-col text-center gap-10 bg-[#FFEDF1] w-full py-[60px] px-30">

                    <h1 className="text-3xl font-bold text-[var(--primary)]">
                        {t("main_pc_004")}
                    </h1>

                    <img src={`/assets/images/home/${lang}/bg_operation_pc.png`} alt="opreration_pc"/>

                    <h1 className="text-3xl font-bold text-[var(--primary)]">
                        {t("main_pc_004")}
                    </h1>

                    <img src={`/assets/images/home/${lang}/timetable_pc.png`} alt="opreration_pc"/>
                </section>

                <section className="flex flex-col text-center gap-10 w-full py-[60px] px-30">

                    <div className="flex flex-col w-full justify-center items-center gap-[14px] px-[20px]">
                        <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold"> {t("main_pc_005")}</h2>

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
                <div className="flex flex-col py-10 w-full h-[370px]">
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
        </>
    )
};
