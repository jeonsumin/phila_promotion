import {ROUTES, routesBuilder} from "shared/config/routes";
import {Link} from "react-router-dom";
import {SuccessDimed} from "shared/ui/successDimed";

export const MissionItem = (props:any) => (
    <div className="relative">
        {props.success.find((f:any) => f.MISSION == props.stamp) &&  <SuccessDimed message="미션 완료"/>}
        <Link to={props.code === "survey" ? ROUTES.SURVEY : routesBuilder.stampMissionDetail(props.code)}>
            <div className="flex flex-col p-5 border rounded-2xl gap-2">
                <p className="text-[var(--primary)] text-sm font-bold ">{props.index == 5 ? "보너스"  : `미션 ${props.index + 1}` }</p>
                <h1 className="text-black font-bold text-xl">{props.contents}</h1>
                <span className="text-xs font-normal text-[var(--termsBd)]">{props.title}</span>
            </div>
        </Link>
    </div>
)
