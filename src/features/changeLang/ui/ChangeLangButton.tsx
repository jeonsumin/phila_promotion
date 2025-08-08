import {useLang} from "features/changeLang";

export const ChangeLangButton = () => {
    const {lang, changeAction} = useLang();

    return (
        <div className={`absolute right-[16px] z-11 `}>
            <div className="relative w-[100px] h-[30px]">
                <select
                    value={lang}
                    onChange={changeAction}
                    className={`bg-white text-[14px] text-[var(--txt)] px-[8px] pr-[30px] appearance-none w-full h-full leading-[30px] rounded-[10px] cursor-pointer border-1 border-gray-200`}
                >
                    <option value="KR">한국어</option>
                    <option value="EN">English</option>
                </select>
                <img
                    src="/assets/images/icon/icn_dropdown.svg"
                    alt=""
                    className="w-[16px] h-[16px] absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>
        </div>
    )
}