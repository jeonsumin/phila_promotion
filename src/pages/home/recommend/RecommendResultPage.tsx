import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {useParams} from "react-router-dom";
import {RECOMMEND_RESULT} from "shared/constant/recommend";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";

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
                <p className="text-base font-normal leading-relaxed text-[var(--subTxt)]">{t(result?.description)} {t('reco_detail_type1_result1_003')} </p>
                <h1 className={`text-4xl font-bold text-[${result?.color}]`}>{t(result?.title)}</h1>

            </div>
            <div className='w-full h-[200px] '>
                <div className={`w-full h-60 bg-[var(--grayBg)] relative`}>

                    <div className="overflow-hidden relative h-full">
                        <img src={result?.img} className="w-full" alt={result?.img}/>
                    </div>

                    <div className="flex justify-end items-end absolute right-4 bottom-3">
                        <ExhibitionLocationButton
                            className="py-1/2 px-1/2">
                            <img src="/assets/images/icn_pin.svg" alt=""/>
                        </ExhibitionLocationButton>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center text-center w-full gap-5 py-5 px-5 bg-[var(--grayBg)]">
                    <div>
                        <p className="text-base font-normal text-[var(--subTxt)]">{t("reco_detail_type1_result1_003")}</p>
                        <h1 className={`text-xl font-bold text-[${result?.color}]`}>{t(result?.recommend[Number(id)].title)}</h1>
                    </div>

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