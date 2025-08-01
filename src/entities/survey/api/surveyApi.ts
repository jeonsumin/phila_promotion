import {$axios} from "shared/config/baseAPI";
import {getCookie} from "shared/utils";

export const updateSurvey = async (params: any) => {
    const res = await $axios.post<any>("/survey", {...params, user_code: getCookie("user"), event_name:"survey"});
    console.log("update survey ", res.data);

    if(res.data.basic.code == 1) throw new Error('@@ failed Satisfaction survey')

    return res.data.data.step;
}