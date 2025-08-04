import {ChangeLangButton} from "features/changeLang";

export const DesktopHeader = () => {
    return (
        <header className="h-14 w-full">
            <div className="flex justify-start items-center relative w-[960px] mx-auto h-full">
                <img src="/assets/images/icon/logo.svg" alt={"logo"} className="w-[116px]"/>
                <ChangeLangButton/>
            </div>
        </header>
    )
}