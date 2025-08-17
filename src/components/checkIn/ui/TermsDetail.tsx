import {X} from "lucide-react";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {Button} from "shared/ui";
import {BrowserView, MobileView} from "react-device-detect";

type PersonalInfoAlertProps = {
    terms: any;
    onClose: () => void;
};

export const TermsDetail = (props: PersonalInfoAlertProps) => {
    const t = useSelector(currentTranslation);
    const {terms, onClose} = props;

    if (terms == null) return null;

    return (
        <div className='fixed top-0 left-0 w-full z-[100] bg-white rounded-lg overflow-hidden'>
            <div
                className={`modal_header flex items-center justify-center px-[16px] py-[22px]`}
            >
                <h1 className="text-[var(--bk)] text-[20px] font-bold ">{t(terms.title)}</h1>
                <button
                    className="absolute right-[16px]"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <X size={24} className="text-[var(--bk)]"/>
                </button>
            </div>

            <div className="terms_height">
                <div className="px-6 scrollbar h-full overflow-y-auto terms_box">
                    <p className="bg-[#F0F0F0] p-4 rounded-2xl">
                        {t(terms.desc)}
                    </p>
                </div>
                <MobileView className="bottom-0 fixed w-full">
                    <Button onClick={onClose} variant="fixed" className="bottom-0">{t('common_01')}</Button>
                </MobileView>
            </div>
            <BrowserView className="w-full py-6">
                <Button onClick={onClose} className="w-[360px] mx-auto">{t('common_01')}</Button>
            </BrowserView>

        </div>
    );
}
