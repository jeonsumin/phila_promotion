import {Otp} from "features/otp";

export const RewardCodeView = (props: any) => (
    <div className="flex flex-col justify-center w-full py-10 gap-10 items-center">
        <div className="flex flex-col text-center gap-2.5">
            <h1 className="text-xl font-bold">리워드 코드 입력</h1>
            <p>스탭 전용 기능입니다. </p>
            <p>리워드 확인 코드를 입력해 주세요.</p>
        </div>
        <Otp couponCode={props.couponCode}/>
    </div>
)
