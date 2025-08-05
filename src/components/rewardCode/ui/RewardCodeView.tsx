import {Otp} from "features/otp";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const RewardCodeView = (props: any) => {
    const t = useSelector(currentTranslation);

    return (
        <div className="flex flex-col justify-center w-full py-10 gap-10 items-center">
            <div className="flex flex-col text-center gap-2.5">
                <h1 className="text-xl font-bold">{t("pop_reward_001")}</h1>
                <p>{t("pop_reward_002")}</p>
                <p>{t("pop_reward_003")}</p>
            </div>
            <Otp couponCode={props.couponCode}/>
        </div>
    )
}