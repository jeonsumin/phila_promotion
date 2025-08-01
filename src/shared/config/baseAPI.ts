import axios from "axios";
import {getCookie} from "shared/utils";

export const $axios = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',
})

$axios.interceptors.request.use((config) => {
    const isUserJoin = config.url?.includes("/user_join");
    if (isUserJoin) return config;

    if (config.method == 'post') {
        config.data = {...config.data, user_code: getCookie("user")}
    }

    return config;
})