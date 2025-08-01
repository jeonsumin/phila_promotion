import {SuccessDimed} from "../successDimed";

export const CouponItem = (props: any) => (
    <div className="flex flex-col relative w-full justify-center items-center gap-5  z-10">
        <SuccessDimed useYn={props.useYn} message="사용완료"/>
        <button onClick={() => (props.isActive && props.useYn == 'N') && props.onClick() }>
            <div
                className={`absolute h-55 left-0 right-0 rounded-2xl flex justify-center items-center ${!props.isActive ? "backdrop-grayscale" : ""  } `}/>

            <div className="w-full border border-[var(--termsBd)] rounded-2xl overflow-hidden">
                <div
                    className="flex flex-col  w-full py-[13px] justify-center items-center text-white font-light  bg-[var(--primary)]">
                    {props.type === "reward" ? "체험권" : "리워드 쿠폰"}
                </div>
                <div className="flex bg-white rounded-b-2xl w-full p-5 gap-5">
                    <img alt="icn_coupon" src="/assets/images/icon/icn_coupon.svg"/>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-lg font-bold text-[var(--primary)]">
                            {props.title}
                        </h1>
                        <p dangerouslySetInnerHTML={{__html: props.subTitle!}}/>
                    </div>
                </div>
            </div>
        </button>
    </div>
);
