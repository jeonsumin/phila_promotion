import {$axios} from "shared/config/baseAPI";
import {getCookie} from "shared/utils";

export const updateRecommend = async (type: string, recommend: string ) => {
    const res = await $axios.post<any>("/recommend_set", {recommend_type: type, recommend: recommend, user_code: getCookie('user')});
    if (res.data.basic.code == 1) throw new Error("@@ Failed Update Recommend ");

    return res.data.data;
}