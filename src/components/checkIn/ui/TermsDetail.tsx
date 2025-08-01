import {X} from "lucide-react";

type PersonalInfoAlertProps = {
    terms: any;
    onClose: () => void;
};

export const TermsDetail = (props: PersonalInfoAlertProps) => {
    const {terms, onClose} = props;

    if (terms == null ) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full z-[100] bg-white rounded-lg'>
            <div
                className={`modal_header flex items-center justify-center px-[16px] py-[16px]`}
            >
                <h1 className="text-[var(--bk)] text-[20px] font-bold">{terms.title}</h1>
                <button
                    className="absolute right-[16px]"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <X size={24} className="text-[var(--bk)]"/>
                </button>
            </div>
            <div className='terms_scroll'>
                <p className='alert_content' style={{whiteSpace: 'pre-line'}}>
                    {terms.desc}
                </p>
            </div>
        </div>
    );
}
