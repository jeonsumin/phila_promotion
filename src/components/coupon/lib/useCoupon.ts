import { fetchCoupon } from "entities/coupon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCoupon = () => {
  const coupon = useSelector((state: RootState) => state.coupon.coupon);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoupon());
  },[dispatch]);


  return {coupon};
};
