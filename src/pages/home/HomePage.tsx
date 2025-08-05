import {Link} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {useLayout} from "shared/ui/layout/useLayout";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {Image} from "shared/ui/image";
import {TIME_TABLE} from "shared/constant/timetable";
import {ExhibitionSpaceView} from "components/place/ui/ExhibitionSpaceView";
import {SurveyButton} from "features/survey/ui/SurveyButton";
import {useSelector} from "react-redux";
import {currentLang, currentTranslation} from "features/changeLang/model/slice";

export const HomePage = () => {

    const lang = useSelector(currentLang);
    const t = useSelector(currentTranslation);

    useLayout()

    return (
        <div className="flex flex-col gap-[40px] items-center">
            <Image item={{src: "/assets/images/home_kv.png"}}/>

            <div className="flex flex-col gap-[24px] text-center text-[var(--subTxt)]">
                <h2 className="text-[22px] font-bold text-[var(--bk)] "> {t("home_main_001")}</h2>
                <div className="flex flex-col gap-[14px] text-[16px] text-center font-light">
                    <p> {t("home_main_002")} </p>
                    <p> {t("home_main_003")} </p>
                </div>
            </div>

            <div className="px-[20px] py-[40px] flex flex-col gap-[40px] items-center bg-[var(--pinkBg)] w-full">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold"> {t("home_main_004")}</h2>
                    <table className="w-full table-fixed border-collapse">
                        <thead>
                        <tr className="bg-[var(--point)] text-[var(--white)]">
                            <th className="w-1/2 px-2 py-2 border text-[16px] border-[var(--pinkBd)]">{t("home_main_005")}</th>
                            <th className="w-1/2 px-2 py-2 border text-[16px] border-[var(--pinkBd)]">{t("home_main_006")}</th>
                        </tr>
                        </thead>
                        <tbody className="text-[var(--bk)] text-[14px] text-center">
                        <tr>
                            <td className="py-[12px] border border-[var(--pinkBd)]">{t("home_main_007")}</td>
                            <td className="py-[12px] border border-[var(--pinkBd)]">{t("home_main_008")}</td>
                        </tr>
                        <tr>
                            <td className="py-[12px] border border-[var(--pinkBd)]">{t("home_main_009")}</td>
                            <td className="py-[12px] border border-[var(--pinkBd)]">{t("home_main_010")}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">{t("home_main_011")}</h2>
                    <SwiperView
                        data={TIME_TABLE(lang)}
                        renderItem={Image}
                    />
                </div>
            </div>


            <ExhibitionSpaceView/>


            <div className="px-[20px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[16px]">
                    <Link to={ROUTES.RECOMMEND}>
                        <img src={`/assets/images/home/${lang}/img_banner_1.png`} alt=""/>
                    </Link>
                </div>

                <SurveyButton/>

                <div className="flex flex-col gap-[16px]">
                    <div className="">
                        <Link to={ROUTES.EVENT}>
                            <img src={`/assets/images/home/${lang}/img_banner_3.png`} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[20px] py-[20px] bg-[var(--lightGrayBg)] w-full items-center">
                <h2 className="text-[16px] text-[var(--subTxt)]">{t("footer_mo")}</h2>
                <div className="flex gap-[16px]">
                    <button onClick={() => {
                        window.open("http://kr.philakorea2025.kr/ ", "_blank")
                    }} className="w-[48px]">
                        <img src="/assets/images/icon/sns_share_1.svg" alt=""/>
                    </button>
                    <button onClick={() => {
                        window.open("https://www.youtube.com/channel/UCw3-jbBEWVitgOFHutWZmug", "_blank")
                    }} className="w-[48px]">
                        <img src="/assets/images/icon/sns_share_2.svg" alt=""/>
                    </button>
                    <button onClick={() => {
                        window.open("https://blog.naver.com/posastamp", "_blank")
                    }} className="w-[48px]">
                        <img src="/assets/images/icon/sns_share_3.svg" alt=""/>
                    </button>
                    <button onClick={() => {
                        window.open("https://www.instagram.com/korea.stamp/", "_blank")
                    }} className="w-[48px]">
                        <img src="/assets/images/icon/sns_share_4.svg" alt=""/>
                    </button>
                </div>
            </div>

        </div>
    )
}