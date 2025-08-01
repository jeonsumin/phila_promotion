import {setCookie} from "shared/utils";

export const setUserToCookies = (userCode: string) => {
    setCookie('user', userCode);
}