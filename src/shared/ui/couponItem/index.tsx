import {SuccessDimed} from "../successDimed";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const CouponItem = (props: any) => {
    const t = useSelector(currentTranslation);
    return (
        <div className="flex flex-col relative w-full justify-center items-center gap-5  z-10">

            {props.useYn && <SuccessDimed message={t("coupon_main_014")}/>}

            <button className="w-full" onClick={() => props.onClick()}>
                <div
                    className={`absolute h-55 left-0 right-0 rounded-2xl flex justify-center items-center ${!props.isActive ? "backdrop-grayscale" : ""} `}/>

                <div className="w-full border border-[var(--termsBd)] rounded-2xl overflow-hidden">
                    <div
                        className="flex flex-col  w-full py-[13px] justify-center items-center text-white font-light  bg-[var(--primary)]">
                        {props.type === "reward" ? t("coupon_main_002") : t("coupon_main_005")}
                    </div>
                    <div className="flex bg-white rounded-b-2xl w-full p-5 gap-5 text-start">
                        <img alt="icn_coupon" src="/assets/images/icn_coupon.svg"/>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-lg font-bold text-[var(--primary)]">
                                {t(props.title)}
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: t(props.subTitle!)}}/>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
