import {BackButton} from "features/backButton/ui/BackButton";
import {ChangeLangButton} from "features/changeLang";
import {useSelector} from "react-redux";
import {RootState} from "app/store";

export const MobileHeader = () => {
    const layout = useSelector((state: RootState) => state.layout);
    return (
        <header className={`h-[50px] max-w-[var(--maxWidth)] mx-auto flex items-center justify-center  bg-[var(--white)] fixed top-0 sticky z-10 ${layout.referrer && "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"}`}>
            {layout.routeName && <BackButton />}
            { layout.routeName ? <p className="text-xl font-bold">{layout.routeName}</p> : <img src="/assets/images/icon/logo.svg" alt={"logo"} className="w-[116px]"/> }
            {!layout.routeName && <ChangeLangButton/>}

        </header>
    )
}