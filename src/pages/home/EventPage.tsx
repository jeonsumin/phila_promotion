import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const EventPage = () => {
    const t = useSelector(currentTranslation);
    useLayout({
        routeName: t("event_detail_001"),
        hasFooter: false,
    })

    const onClick = () => {
        window.open("https://www.instagram.com/p/DOu9NL_j8vU/?img_index=1&igsh=bDA4Z3ozYnNvN296")
    }
    return (
        <div>
            <div className="w-full h-full bg-gray-500">
                <img src="/assets/images/sns.png" className="w-full"
                     alt="randomImg"/>
            </div>

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">{t("event_detail_002")}</h1>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col px-[20px]">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.1
                            </p>
                        </div>
                        <p
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">
                            {t("event_detail_003")}
                        </p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.2
                            </p>
                        </div>
                        <p
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">
                            {t("event_detail_004")}
                        </p>
                    </div>

                </div>
            </div>
            <div className="p-5">
                <Button onClick={onClick} > {t("event_detail_005")}</Button>
            </div>
        </div>
    )
}
