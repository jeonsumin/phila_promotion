import {useLayout} from "shared/ui/layout/useLayout";
import {ExhibitionDetailView} from "components/ExhibitionItem";
import {RECOMMEND_RESULT} from "shared/constant/recommend";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const OtherRecommendPage = () => {
    const {target, id} = useParams();
    const t = useSelector(currentTranslation);
    const [result, setResult] = useState(
        RECOMMEND_RESULT
            .filter(ex => ex.type == target).at(0)?.recommend
            .filter((_, index: number) => index !== Number(id))
    )

    useLayout({
        routeName: t("reco_detail_type1_result1_alt_001"),
        hasFooter: false,
    })
    return (
        <div className="flex flex-col">
            {result?.map((item: any, index: any) =>
                <ExhibitionDetailView
                    key={index}
                    item={item}
                    index={0}
                />
            )}
        </div>
    )
}