import {selectStamp} from "entities/stamp/api/stampApi";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {useModal} from "shared/config/ModalProvider";
import {useSelector} from "react-redux";
import {currentLang, currentTranslation} from "features/changeLang/model/slice";

export const useSurvey = () => {
    const lang = useSelector(currentLang);
    const navigate = useNavigate();
    const t = useSelector(currentTranslation);
    const {showAlert} = useModal();

    const checkSurvey = async () => {
        const stamp = await selectStamp();
        const isSurvey = stamp.find((f:any) => f.MISSION == "mission5")
        if(!isSurvey){
            navigate(ROUTES.SURVEY)
        } else{
            showAlert({
                title: t("pop_survey_cplt_001"),
                message:t("pop_survey_cplt_002"),
            })
        }
    }
    return {checkSurvey,lang}
}