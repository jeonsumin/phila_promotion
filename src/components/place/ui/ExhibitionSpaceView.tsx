import {useExhibition} from "components/place";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {Button} from "shared/ui";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {PlaceCard} from "shared/ui/placeCard";

export const ExhibitionSpaceView = () => {
    const {exhibition, currentExhibitionCode, selectedExhibition, onClick} = useExhibition()

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center gap-[14px] px-[20px]">
                <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">전시공간 안내</h2>

                <ExhibitionLocationButton label="전시공간 안내도 보기" title="전시공간 안내도" subTitle="입구에서 오른쪽으로 직진하시면 위치해 있습니다."/>

                <div className="grid grid-cols-2 w-full gap-[6px] text-white">
                    {
                        exhibition.map((place, index) =>
                            <Button
                                key={index}
                                color={place.isActive ? 'default' : 'light'}
                                onClick={() => onClick(place.code)}
                                className="font-normal"
                            >
                                {place.title}
                            </Button>
                        )
                    }
                </div>

            </div>
            <div className="flex pl-[20px]">

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