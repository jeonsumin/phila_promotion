import {useSurvey} from "features/survey/model/useSurvey";

export const SurveyButton = () => {
    const {checkSurvey,lang} = useSurvey();

    return (
        <div className="flex flex-col gap-[16px]">
            <div onClick={checkSurvey}>
                <img src={`/assets/images/home/${lang}/img_banner_2.png`} alt=""/>
            </div>
        </div>
    )
}