import {useExhibition} from "components/place";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {Button} from "shared/ui";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {PlaceCard} from "shared/ui/placeCard";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang/model/slice";
import {cn} from "shared/utils";

export const ExhibitionSpaceView = () => {
    const t = useSelector(currentTranslation);
    const {exhibition, currentExhibitionCode, selectedExhibition, onClick} = useExhibition()

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center gap-[14px] px-[20px]">
                <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">{t("home_main_space_000")}</h2>

                <ExhibitionLocationButton
                    label={t('home_main_space_002')}
                    title={t("home_main_space_000")}
                    subTitle={t("pop_space_loc_016")}
                    map={"/assets/images/basic_map.png"}
                    className="font-light text-sm"
                />

                <div className="grid grid-cols-2 w-full gap-[6px] text-white">
                    {
                        exhibition.map((place, index) =>
                            <button
                                key={index}
                                onClick={() => onClick(place.code)}
                                className={
                                    cn(
                                        "flex items-center justify-center text-[var(--white)] text-[16px] rounded-full py-3",
                                        place.isActive ? "bg-[var(--point)]" : "bg-[var(--lightGrayBg)] text-[var(--subTxt)]"
                                    )
                                }
                            >{t(place.title)}</button>
                        )
                    }
                </div>
            </div>
            <div className={cn(
                "flex w-full",
                selectedExhibition.length > 1 ? "pl-5" : "pl-5 pr-[26.6px]"
            )}>
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