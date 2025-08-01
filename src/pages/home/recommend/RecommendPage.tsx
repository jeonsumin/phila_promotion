import {useLayout} from "shared/ui/layout/useLayout";
import {Survey} from "components/survey";
import {RECOMMEND} from "shared/constant/recommend";
import {RecommendSurvey} from "components/recommend";

export const RecommendPage = () => {
    useLayout({
        routeName: "체험추천",
        hasFooter: false,
    })
    return (
        <div className="px-5 py-10">
            <RecommendSurvey/>
        </div>
    )

}