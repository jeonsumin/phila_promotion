import {$axios} from "shared/config/baseAPI";
import {setUserToCookies, user} from "entities/user";

export const joinUser = async (params: user) => {
    const res = await $axios.post<any>('/user_join', params);
    console.log('join User data :: ', res.data);

    if (res.data.basic.code == 1) throw new Error('@@ failed check-in!')

    setUserToCookies(res.data.data.user_code);
    return res.data.data.step;
}

export const checkInUserCheck = async (params: any) => {
    const res = await $axios.post<any>('/user_check', params)

    if (res.data.data.code == 0) {
        setUserToCookies(res.data.data.user_code);
    }
    return res.data.data.code;
}