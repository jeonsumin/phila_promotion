import {useLayout} from "shared/ui/layout/useLayout";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {ExhibitionDetailView} from "components/ExhibitionItem";
import {useParams} from "react-router-dom";
import {EXHIBITION} from "shared/constant/place";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const ExhibitionDetailPages = (props: any) => {
    const t = useSelector(currentTranslation);
    const exhibition = EXHIBITION.find(ex => ex.code === props.code)!;

    return (
        <SwiperView
            pagination={true}
            className={"!h-full"}
            data={exhibition.item}
            target={exhibition.title}
            idx={props.id}
            renderItem={ExhibitionDetailView}
        />

    )
}
