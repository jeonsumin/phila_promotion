import {MissionItem} from "shared/ui/missionItem";
import {MISSION} from "shared/constant/mession";
import {useMission} from "components/mission";

export const MissionList = () => {

    const {stamp} = useMission();

    return (
        <div className="flex flex-col px-5 py-10 relative justify-center gap-3.5 ">
            {
                MISSION.map((mission, index) =>
                    <MissionItem key={index} {...mission} index={index} success={stamp}/>
                )
            }
        </div>

    )
}