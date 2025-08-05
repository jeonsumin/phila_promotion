import {useLayout} from "shared/ui/layout/useLayout";
import { CouponList } from "components/coupon";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const CouponPage = () => {
    const t = useSelector(currentTranslation);

    useLayout()


    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col py-[15px] px-[20px] w-full justify-center items-center gap-3.5">
                <h1 className="text-xl font-bold ">{t("coupon_main_001")}</h1>
            </div>
            <CouponList />
        </div>
    )
}