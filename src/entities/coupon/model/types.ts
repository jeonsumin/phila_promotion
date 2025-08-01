export type Coupon = {
    COUPON: string;
    USE_YN: string;
}

export type CouponState = {
    isLoading: boolean;
    coupon: Coupon[] | null;
}