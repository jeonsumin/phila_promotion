import {useExhibition} from "components/place";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {Button} from "shared/ui";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {PlaceCard} from "shared/ui/placeCard";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang/model/slice";

export const ExhibitionSpaceView = () => {
    const t = useSelector(currentTranslation);
    const {exhibition, currentExhibitionCode, selectedExhibition, onClick} = useExhibition()

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center gap-[14px] px-[20px]">
                <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">{t("home_main_space_001")}</h2>

                <ExhibitionLocationButton label={t('home_main_space_002')} title={t("home_main_space_000")} subTitle={t("pop_space_loc_016")}/>

                <div className="grid grid-cols-2 w-full gap-[6px] text-white">
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
            <div className="flex w-full">
                <SwiperView
                    slideClassName="!w-[93%]"
                    data={selectedExhibition}
                    target={currentExhibitionCode}
                    renderItem={PlaceCard}
                />
            </div>
        </>
    )
}