import {useLayout} from "shared/ui/layout/useLayout";
import {Survey} from "components/survey";
import {RECOMMEND} from "shared/constant/recommend";
import {RecommendSurvey} from "components/recommend";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const RecommendPage = () => {

    const t = useSelector(currentTranslation);
    useLayout({
        routeName: t("reco_detail_001"),
        hasFooter: false,
    })
    return (
        <div className="px-5 py-10">
            <RecommendSurvey/>
        </div>
    )

}