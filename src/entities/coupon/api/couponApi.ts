    import { $axios } from "shared/config/baseAPI"
import { getCookie } from "shared/utils"

export const selectCoupon = async () => {
    const res = await $axios.post<any>('/coupon', {user_code: getCookie("user")})

    console.log(res.data.data.coupon);

    if( res.data.basic.code == 1) throw new Error("@@ Failed Selected Coupon ");

    return res.data.data.coupon;

}

export const updateUseCoupon = async (coupon: string) => {
    const res = await $axios.post<any>("/coupon_set", {coupon_code: coupon, user_code: getCookie("user")})
    console.log(res.data);

    if( res.data.basic.code == 1) throw new Error("@@ Failed update use Coupon ");

    return res.data.data.code;
    
}