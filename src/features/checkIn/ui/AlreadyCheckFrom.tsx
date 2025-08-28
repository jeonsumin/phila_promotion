import {Input} from "shared/ui/input";
import {useAlreadyCheckin} from "features/checkIn";
import {Button} from "shared/ui";
import {CircleAlert} from "lucide-react";

export const AlreadyCheckFrom = () => {

    const {t, phoneNum, failedCheckIn, setForm, onSubmit, input2, input3} = useAlreadyCheckin();
    return (
        <div className="flex flex-col px-5 space-y-6">
            <div className="space-y-4">
                <h1 className="text-xl font-bold text-[var()] ">{t("pop_preo_chk_mo_001")}</h1>
                <p className="text-[var(--subTxt)]">{t("pop_preo_chk_mo_002")}</p>
            </div>
            <div className="flex justify-start items-center gap-2">
                <Input
                    type={"number"}
                    id={"phone1"}
                    placeholder="010"
                    maxLength={3}
                    inputMode={"decimal"}
                    value={phoneNum.phone1}
                    className="placeholder:text-center text-center"
                    onChange={(e: any) => {
                        e.target.value.length == 3 && input2.current?.focus()
                        setForm("phone1", e.target.value)
                    }}
                />
                -
                <Input
                    type={"number"}
                    maxLength={4}
                    id={"phone2"}
                    inputMode={"decimal"}
                    inputRef={input2}
                    placeholder="1234"
                    value={phoneNum.phone2}
                    className="placeholder:text-center text-center"
                    onChange={(e: any) => {
                        e.target.value.length == 4 && input3.current?.focus()
                        setForm("phone2", e.target.value)
                    }}
                />
                -
                <Input
                    type={"number"}
                    id={"phone3"}
                    inputMode={"decimal"}
                    inputRef={input3}
                    maxLength={4}
                    placeholder="5678"
                    value={phoneNum.phone3}
                    className="placeholder:text-center text-center"
                    onChange={(e: any) => {
                        e.target.value.length == 4 && input3.current?.blur()
                        setForm("phone3", e.target.value)
                    }}
                />
            </div>
            {failedCheckIn && <div className="flex gap-1 items-center text-xs text-[var(--primary)]">
                <CircleAlert size="14"/>
                <p>{t("pop_preo_chk_mo_002")}</p>
            </div>}
            <div>
                <Button onClick={onSubmit}>{t("pop_preo_chk_mo_004")}</Button>
            </div>
        </div>
    )
}