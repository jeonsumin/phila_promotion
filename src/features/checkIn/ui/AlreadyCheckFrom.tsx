import {Input} from "shared/ui/input";
import {useAlreadyCheckin} from "features/checkIn";
import {Button} from "shared/ui";
import {CircleAlert} from "lucide-react";

export const AlreadyCheckFrom = () => {
    const {phoneNum, failedCheckIn,setForm, onSubmit} = useAlreadyCheckin();
    return (
        <div className="flex flex-col px-5 gap-3.5">
            <h1 className="text-xl font-bold ">사전 등록 체크인</h1>
            <p>사전등록시 입력했던<br/> 휴대폰번호를 입력해주세요.</p>
            <div className="flex justify-start items-center gap-2">
                <Input
                    type={"text"}
                    maxLength={3}
                    placeholder="010"
                    value={phoneNum.phone1}
                    onChange={(e: any) => setForm("phone1", e.target.value)}
                />
                -
                <Input
                    type={"text"}
                    maxLength={4}
                    placeholder="1234"
                    value={phoneNum.phone2}
                    onChange={(e: any) => setForm("phone2", e.target.value)}
                />
                -
                <Input
                    type={"text"}
                    maxLength={4}
                    placeholder="5678"
                    value={phoneNum.phone3}
                    onChange={(e: any) => setForm("phone3", e.target.value)}
                />
            </div>
            {failedCheckIn && <div className="flex gap-1 items-center text-xs text-[var(--primary)]">
                <CircleAlert size="14"/>
                <p>입력하신 번호로 등록된 정보가 없습니다.</p>
            </div>}
            <div>
                <Button onClick={onSubmit}>입장하기</Button>
            </div>
        </div>
    )
}