import {ReactNode} from "react";
import {X} from "lucide-react";
import {cn} from "shared/utils";
import { isBrowser,isMobile} from "react-device-detect";

type Props = {
    title?: string;
    isLogo?: boolean;
    body?: ReactNode;
    closeModal?: () => void;
};

export const Modal = ({title, isLogo, body, closeModal}: Props) => {
    return (
        <div
            className={
                cn(
                    "fixed left-0 w-full bg-[var(--white)] z-[99999]",
                    isMobile ? 'h-full top-0 max-w-[var(--maxWidth)]' : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[var(--pcContentWidth)]'
                )
            }
        >
            <div
                className={`modal_header ${isLogo ? "logo" : ""} flex items-center justify-center px-[16px] py-[16px]`}
            >
                <h1 className="text-[var(--bk)] text-[20px] font-bold">{title}</h1>
                <button
                    className="absolute right-[16px]"
                    onClick={closeModal}
                    aria-label="닫기"
                >
                    <X size={24} className="text-[var(--bk)]"/>
                </button>
            </div>
            <div className="scrollbar">{body}</div>
        </div>
    );
};
