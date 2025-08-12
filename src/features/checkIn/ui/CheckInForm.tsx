import {Input} from "shared/ui/input";
import {cn} from "shared/utils";
import {isMobile} from "react-device-detect";
import {useCheckIn} from "features/checkIn/lib/useCheckIn";
import {CheckBoxField} from "shared/ui/checkBoxField";
import {TERMS} from "shared/constant/terms";
import {TermsDetail} from "components/checkIn";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const CheckInForm = () => {

    const {input2,input3, checkInForm, currentTerms,  setCheckInFrom, validation, handleAllCheck, onDetailTerms, onSubmit} = useCheckIn()
    const t = useSelector(currentTranslation);


    return (
        <>
            <div className="flex flex-col justify-center px-5 gap-6 ">
                <div className={cn(
                    "w-full",
                    isMobile ? 'space-y-4 mt-[20px]' : 'flex gap-5 justify-center items-center mt-[30px]'
                )}>
                    <Input
                        label={t("pop_open_chk_mo_002")}
                        value={checkInForm.nick_name}
                        placeholder={"Up to 8 characters (Kor/Eng/Num)"}
                        onChange={(e: any) => setCheckInFrom('nick_name', e.target.value)}
                    />

                    <div className="flex flex-col justify-center items-start gap-2">
                        <label className="text-sm font-bold text-[var(--subTxt)]">{t("pop_open_chk_mo_004")}</label>
                        <div className="flex justify-start items-center gap-2">
                            <Input
                                type={"text"}
                                id={"phone1"}
                                inputMode={"decimal"}
                                placeholder="010"
                                maxLength={3}
                                value={checkInForm.phone1}
                                onChange={(e: any) => {
                                    setCheckInFrom('phone1', e.target.value)
                                    e.target.value.length == 3 && input2.current?.focus()
                                }}
                            />
                            -
                            <Input
                                type={"text"}
                                id={"phone2"}
                                inputMode={"decimal"}
                                placeholder="1234"
                                inputRef={input2}
                                maxLength={4}
                                value={checkInForm.phone2}
                                onChange={(e: any) => {
                                    setCheckInFrom('phone2', e.target.value)
                                    e.target.value.length == 4 && input3.current?.focus()
                                }}
                            />
                            -
                            <Input
                                type={"text"}
                                id={"phone3"}
                                inputMode={"decimal"}
                                placeholder="5678"
                                inputRef={input3}
                                maxLength={4}
                                value={checkInForm.phone3}
                                onChange={(e: any) => setCheckInFrom('phone3', e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col w-full gap-2">
                    <h1 className="text-start text-sm font-bold text-[var(--subTxt)]">{t("pop_open_chk_mo_006")}</h1>
                    <div
                        className="flex flex-col justify-center w-full border-1 border-[var(--termsBd)] rounded-lg p-5 gap-2">
                        <CheckBoxField
                            label={t("pop_open_chk_mo_007")}
                            className="!font-bold"
                            checked={checkInForm.allChecked}
                            onChange={(e: any) => handleAllCheck(e.target.checked)}
                        />

                        {TERMS.map((item: any, index: number) =>
                            <CheckBoxField
                                key={index}
                                label={t(item.title)}
                                require={true}
                                checked={checkInForm[`terms${item.id}`]}
                                onChange={(e: any) => setCheckInFrom(`terms${item.id}`, e.target.checked)}
                                onLabelClick={() => onDetailTerms(item.id)}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className={cn(
                "flex"
                , !isMobile && 'py-5 px-20 justify-center items-center'
            )}>
                <button
                    onClick={onSubmit}
                    disabled={!validation()}
                    className={cn(
                        "h-[60px] font-bold text-[var(--white)] bg-[var(--point)] justify-center items-center disabled:bg-[var(--subTxt)]"
                        , isMobile ? 'w-full fixed bottom-0' : 'rounded-full w-full'
                    )}>{t('pop_open_chk_mo_011')}
                </button>
            </div>
            <TermsDetail terms={currentTerms}  onClose={() => onDetailTerms(null)}/>
        </>
    )
}