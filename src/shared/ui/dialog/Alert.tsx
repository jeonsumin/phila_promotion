import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

type Props = {
    title?: string;
    message?: string;
    children?: ReactNode;
    isCancel?: boolean;
    isConfirm?: boolean;
    onConfirm?: () => void;
    alertClose?: () => void;
};
export const Alert = (props: Props) => {
    const t = useSelector(currentTranslation);
    const {title, message, children, isCancel,isConfirm, onConfirm, alertClose} = props;
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen bg-[#454545] opacity-50 z-[99999] gap-5"
                 onClick={alertClose}/>
            <div
                className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-[10px] max-w-screen-sm w-[90%] gap-5 py-10 z-[99999] bg-white">

                <div className="flex flex-col items-center justify-center px-5 gap-5 ">
                    <h1 className="leading-[1.6] text-[24px] font-bold">
                        {title}
                    </h1>
                    {message && <span className="text-[18px]">{message}</span>}
                </div>

                {children && children}

                {!isConfirm && <div className="flex w-full gap-[10px] px-5 bottom-10 z-[100000]">
                    {isCancel && <button
                        className="rounded-full bg-[#666] text-[var(--txt)] text-[20px] font-bold flex items-center justify-center min-h-[60px] w-full"
                        onClick={alertClose}
                    >
                        {t("common_02")}
                    </button>}
                    <button
                        className="rounded-full bg-[var(--point)] text-white text-[20px] font-bold flex items-center justify-center min-h-[60px] w-full"
                        onClick={onConfirm}
                    >
                        {t("common_01")}
                    </button>
                </div>}
            </div>
        </>

    );
};
