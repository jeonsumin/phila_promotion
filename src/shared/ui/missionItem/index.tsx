import {ROUTES, routesBuilder} from "shared/config/routes";
import {Link} from "react-router-dom";
import {SuccessDimed} from "shared/ui/successDimed";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const MissionItem = (props: any) => {
    const t = useSelector(currentTranslation)

    return (<div className="relative">
            {props.success.find((f: any) => f.MISSION == props.stamp) && <SuccessDimed message={t("stamp_main_028")}/>}
            <Link to={props.code === "survey" ? ROUTES.SURVEY : routesBuilder.stampMissionDetail(props.stamp)}>
                <div className="flex flex-col p-5 border rounded-2xl gap-2">
                    <p className="text-[var(--primary)] text-sm font-bold ">{props.index == 5 ? t("stamp_detail_026") : `${t("stamp_main_026")} ${props.index + 1}`}</p>
                    <h1 className="text-black font-bold text-[22px]">{t(props.contents)}</h1>
                    <span className="text-xs font-normal text-[var(--subTxt)]">{t(props.title)}</span>
                </div>
            </Link>
        </div>
    )
}