import OtpInput from 'react-otp-input';
import {useOtp} from "features/otp/lib/useOtp";
import {Button} from "shared/ui";
import {Check} from "lucide-react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const Otp = (props: any) => {
    const otp = useOtp();
    const t = useSelector(currentTranslation);
    return (
        <div className="flex flex-col gap-2">
            <OtpInput
                value={otp.otp}
                onChange={otp.onChange}
                numInputs={4}
                inputStyle={{
                    background: otp.isFailed ? '#FCECF0' : '',
                }}
                renderInput={(props) =>
                    <input
                        {...props}
                        className="!size-20 !rounded-md !gap-3 !m-1 space-x-2 text-3xl bg-[var(--lightGrayBg)] focus:bg-[#FCECF0] !caret-transparent"
                        inputMode={"numeric"}
                        type={"password"}
                    />
                }
            />
            {otp.isFailed && <div className="w-full text-center text-sm text-[var(--primary)]">{t("pop_reward_004")} </div>}
            <div className="absolute bottom-0 items-center w-full p-5">
                <Button variant="rounded" color={otp.isActive && !otp.isFailed ? 'default' : 'gray'} disabled={otp.isActive && otp.isFailed}
                        className="mx-auto" onClick={() => otp.onSubmit(props.couponCode)}>
                    <Check size={"40"}/>
                </Button>
            </div>
        </div>
    )
}