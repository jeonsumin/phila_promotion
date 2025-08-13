import {X} from "lucide-react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

type PersonalInfoAlertProps = {
    terms: any;
    onClose: () => void;
};

export const TermsDetail = (props: PersonalInfoAlertProps) => {
    const t = useSelector(currentTranslation);
    const {terms, onClose} = props;

    if (terms == null ) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full z-[100] bg-white rounded-lg  scrollbar'>
            <div
                className={`modal_header flex items-center justify-center px-[16px] py-[16px]`}
            >
                <h1 className="text-[var(--bk)] text-[20px] font-bold">{t(terms.title)}</h1>
                <button
                    className="absolute right-[16px]"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <X size={24} className="text-[var(--bk)]"/>
                </button>
            </div>
            <div className='p-4'>
                <p className="bg-[#D9D9D9] p-4 rounded-md ">
                    {t(terms.desc)}
                </p>
            </div>
        </div>
    );
}
