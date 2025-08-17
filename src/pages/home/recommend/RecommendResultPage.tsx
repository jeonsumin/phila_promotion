import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {useParams} from "react-router-dom";
import {RECOMMEND_RESULT} from "shared/constant/recommend";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const RecommendResultPage = () => {
    const {target, id} = useParams();
    const result = RECOMMEND_RESULT.find(ex => ex.type === target);
    const t = useSelector(currentTranslation);

    useLayout({
        routeName: t("reco_detail_001"),
        hasFooter: false,
    })

    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full gap-5 py-10 px-5 justify-start items-center text-center">
                <p className="text-base font-normal leading-relaxed">{t(result?.description)} {t('reco_detail_type1_result1_003')} </p>
                <h1 className={`text-4xl font-bold text-[${result?.color}]`}>{t(result?.title)}</h1>
            </div>
            <div className='w-full h-[200px] '>
                <img src={result?.img} className="w-full"
                     alt={result?.img}/>
                <div
                    className="flex flex-col justify-center items-center text-center w-full gap-5 py-5 px-5 bg-[var(--grayBg)]">
                    <p className="text-base font-normal">{t("reco_detail_type1_result1_003")}</p>
                    <h1 className={`text-xl font-bold text-[${result?.color}]`}>{t(result?.recommend[Number(id)].title)}</h1>
                    <p>
                        {t(result?.recommend[Number(id)].caption)}
                    </p>
                </div>
                <div className="flex flex-col p-5 gap-3.5">
                    <Button url={routesBuilder.recommendOther(target, id)} color={"light"}
                            className="text-black">{t("reco_detail_type1_result1_006")}</Button>
                    <Button url={ROUTES.HOME}>{t("common_01")}</Button>
                </div>
            </div>
        </div>

    )
}