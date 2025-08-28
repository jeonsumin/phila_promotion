import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {Survey} from "components/survey";
import {SATISFACTION} from "shared/constant/satisfaction";
import {useState} from "react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const SurveyPage = () => {
    const [intro, setIntro] = useState<boolean>(true)
    const t = useSelector(currentTranslation);
    useLayout({
        routeName: t("survey_detail_001"),
        hasFooter: false,
    })


    const SurveyIntro = () => (
        <div className="flex flex-col mb-20 py-10 justify-center items-center text-center gap-5">
            <h1 className="font-bold text-[22px]">
                {t("survey_detail_002")}
            </h1>
            <div className="flex flex-col gap-3.5 text-base font-normal text-[var(--subTxt)]">
                <p>
                    {t("survey_detail_003")}
                </p>
                <p> {t("survey_detail_004")}
                </p>
            </div>
            <div className="px-10">
                <img src="/assets/images/mascot_group.png" alt=""/>
            </div>

            <div className="w-full p-5 fixed bottom-0">
                <Button
                    onClick={() => {
                        setIntro(prevState => !prevState)
                    }}
                >
                    {t("survey_detail_005")}
                </Button>
            </div>
        </div>
    )


    if (intro) return SurveyIntro();

    return (
        <div className="flex flex-col px-5 py-10 justify-center items-center gap-5">
            <Survey data={SATISFACTION} type={"survey"}/>
        </div>
    )

}
