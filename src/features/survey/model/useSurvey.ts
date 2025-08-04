import {selectStamp} from "entities/stamp/api/stampApi";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {useModal} from "shared/config/ModalProvider";
import {useSelector} from "react-redux";
import {currentLang} from "features/changeLang/model/slice";

export const useSurvey = () => {
    const lang = useSelector(currentLang);
    const navigate = useNavigate();
    const {showAlert} = useModal();

    const checkSurvey = async () => {
        const stamp = await selectStamp();
        const isSurvey = stamp.find((f:any) => f.MISSION == "mission5")
        if(!isSurvey){
            navigate(ROUTES.SURVEY)
        } else{
            showAlert({
                title:"설문에 이미 참여하셨습니다.",
                message:"의견을 나눠주셔서 감사합니다."
            })
        }
    }
    return {checkSurvey,lang}
}