import {$axios} from "shared/config/baseAPI";
import {getCookie} from "shared/utils";

export const selectStamp = async () => {
    const res = await $axios.post<any>('/stamp_check');

    if (res.data.basic.code == 1) throw new Error("@@ Failed select stamp")

    return res.data.data.stamp;
}

export const checkStamp = async (mission: string) => {
    const res = await $axios.post<any>("/stamp_set", {mission: mission, user_code: getCookie("user")})
    console.log("check Stamp ::: ", res.data);

    if(res.data.basic.code == 1) throw new Error("Failed Check Stamp");

    return res.data.data.code;
}