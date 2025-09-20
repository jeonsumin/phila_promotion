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
        if(coupon == undefined) return ;

        const checkUseYn = coupon.filter(ex => ex.COUPON == code)[0]

        console.log(checkUseYn);
        if(checkUseYn && checkUseYn.USE_YN == "N")
            modal.showModal({
                title: t("pop_reward_001"),
                body: <RewardCodeView couponCode={code}/>,
            })
    }

    if(coupon == undefined) return ;
    return (
        <div className="flex flex-col px-5 relative justify-center gap-3.5 ">
            {COUPON.map((item, index) => (
                <CouponItem
                    key={index}
                    index={index}
                    {...item}
                    success={coupon}
                    onClick={() => onClick(item.code)}
                    useYn={coupon?.filter((f: any) => f.COUPON == item.code)[0]?.USE_YN == "Y"}
                    isActive={coupon?.find((f: any) => f.COUPON == item.code)}
                />
            ))}
        </div>
    );
};
