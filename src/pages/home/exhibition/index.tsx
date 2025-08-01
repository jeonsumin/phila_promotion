import {useLayout} from "shared/ui/layout/useLayout";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {ExhibitionDetailView} from "components/ExhibitionItem";
import {useParams} from "react-router-dom";
import {EXHIBITION} from "shared/constant/place";

export const ExhibitionDetailPages = () => {
    const {target, id} = useParams();
    const exhibition = EXHIBITION.find(ex => ex.code === target)!;

    useLayout({
        routeName: exhibition.title,
        hasFooter: false
    })


    return (
        <SwiperView
            pagination={true}
            className={"h-full"}
            data={exhibition.item}
            idx={id}
            renderItem={ExhibitionDetailView}
        />

    )
}