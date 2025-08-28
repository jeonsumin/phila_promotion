import {CouponItem} from "shared/ui/couponItem";
import {useCoupon} from "../lib/useCoupon";
import {COUPON} from "shared/constant/coupon";
import {useModal} from "shared/config/ModalProvider";
import {RewardCodeView} from "components/rewardCode";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const CouponList = () => {
    const {coupon} = useCoupon();
    const t = useSelector(currentTranslation);
    const modal = useModal();

    const onClick = (code: string) => {
        modal.showModal({
            title: t("pop_reward_001"),
            body: <RewardCodeView couponCode={code}/>,
        })
    }

    return (
        <div className="flex flex-col px-5 relative justify-center gap-3.5 ">
            {COUPON.map((item, index) => (
                <CouponItem
                    key={index}
                    index={index}
                    {...item}
                    success={coupon}
                    onClick={() => onClick(item.code)}
                    useYn={coupon?.filter((f: any) => f.COUPON == item.code).map(x => x.USE_YN)}
                    isActive={coupon?.find((f: any) => f.COUPON == item.code)}
                />
            ))}
        </div>
    );
};
