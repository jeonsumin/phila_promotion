import {$axios} from "shared/config/baseAPI";

export const updateTreasure = async (type: string) => {
    const res = await $axios.post('/treasure_set',{type: type});
    if (res.data.basic.code == 1) throw new Error("@@ Failed Update Recommend ");

    return res.data.data;
}