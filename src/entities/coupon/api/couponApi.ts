import {$axios} from "shared/config/baseAPI"
import {getCookie} from "shared/utils"

export const selectCoupon = async () => {
    const res = await $axios.post<any>('/coupon')

    if (res.data.basic.code == 1) throw new Error("@@ Failed Selected Coupon ");

    return res.data.data.coupon;

}

export const updateUseCoupon = async (coupon: string) => {
    const res = await $axios.post<any>("/coupon_use_set", {coupon_code: coupon})

    if (res.data.basic.code == 1) throw new Error("@@ Failed update use Coupon ");

    return res.data.data.code;

}

export const insertCoupon = async (couponCode: string) => {
    const res = await $axios.post("/coupon_set", {coupon_code: couponCode})

    return res.data.data.code;
}