import {ReactNode} from "react";
import {Outlet} from "react-router-dom";

type Props = {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    isFooter?: boolean;
}
export const Desktop = (props: Props) => {
    const {headerSlot, footerSlot, isFooter = true} = props
    return (
        <div className="w-full h-[100dvh] scrollbar">
            {headerSlot}
            <main className={`overflow-y-auto scrollbar `} style={{height: "calc(100dvh - 56px)"}}>
                <Outlet/>
            </main>
            {isFooter && footerSlot}
        </div>
    )
}