import {Link} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {useLayout} from "shared/ui/layout/useLayout";
import {SwiperView} from "shared/ui/swiper/SwiperView";
import {Image} from "shared/ui/image";
import {TIME_TABLE} from "shared/constant/timetable";
import {ExhibitionSpaceView} from "components/place/ui/ExhibitionSpaceView";
import {SurveyButton} from "features/survey/ui/SurveyButton";

export const HomePage = () => {

    useLayout()

    return (
        <div className="flex flex-col gap-[40px] items-center">
            <Image item={{src: "/assets/images/home_kv.png"}}/>

            <div className="flex flex-col gap-[24px] text-center text-[var(--subTxt)]">
                <h2 className="text-[22px] font-bold text-[var(--bk)] ">우표로 세계를 잇는 글로벌 문화 축제</h2>
                <div className="flex flex-col gap-[14px] text-[16px] text-center font-light">
                    <p>
                        PHILAKOREA 2025 세계우표전시회는<br/> 세계우표연맹(FIP)이 공인한<br/> 국제 우표 문화 박람회로,<br/>
                        국내 최대 규모를 자랑합니다.
                    </p>
                    <p>디지털 기술과 전통 우취 문화를 결합해<br/>
                        우표의 예술적·역사적·교육적 가치를 <br/> 체험할 수 있으며,<br/>
                        전시·국제 경연·체험·스탬프 투어 등<br/>
                        다양한 프로그램을 선보입니다.
                    </p>
                    <p>
                        디지털관, 글로벌 우표 경매, AI 기반 체험 등<br/>
                        미래지향적인 콘텐츠를 통해 전 세대가 함께 <br/>
                        즐길 수 있는 문화 플랫폼으로 자리매김하며,<br/>
                        대한민국 우정 문화의 위상을<br/>
                        세계에 알리는 계기가 될 것입니다.
                    </p>
                </div>
            </div>

            <div className="px-[20px] py-[40px] flex flex-col gap-[40px] items-center bg-[var(--pinkBg)] w-full">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">운영시간</h2>
                    <table className="w-full table-fixed border-collapse">
                        <thead>
                        <tr className="bg-[var(--point)] text-[var(--white)]">
                            <th className="w-1/2 px-2 py-2 border text-[16px] border-[var(--pinkBd)]">일자</th>
                            <th className="w-1/2 px-2 py-2 border text-[16px] border-[var(--pinkBd)]">시간</th>
                        </tr>
                        </thead>
                        <tbody className="text-[var(--bk)] text-[14px] text-center">
                        <tr>
                            <td className="py-[12px] border border-[var(--pinkBd)]">09.17. ~ 09.20</td>
                            <td className="py-[12px] border border-[var(--pinkBd)]">10:00 ~ 18:00</td>
                        </tr>
                        <tr>
                            <td className="py-[12px] border border-[var(--pinkBd)]">09.21</td>
                            <td className="py-[12px] border border-[var(--pinkBd)]">10:00 ~ 17:00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h2 className="self-center text-[22px] border-[var(--point)] text-[var(--point)] font-bold">프로그램
                        안내</h2>
                    <SwiperView
                        data={TIME_TABLE}
                        renderItem={Image}
                    />
                </div>
            </div>


            <ExhibitionSpaceView/>


            <div className="px-[20px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[16px]">
                    <Link to={ROUTES.RECOMMEND}>
                        <img src="/assets/images/home/img_banner_1.png" alt=""/>
                    </Link>
                </div>

                <SurveyButton/>

                <div className="flex flex-col gap-[16px]">
                    <div className="">
                        <Link to={ROUTES.EVENT}>
                            <img src="/assets/images/home/img_banner_3.png" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[20px] py-[20px] bg-[var(--lightGrayBg)] w-full items-center">
                <h2 className="text-[16px] text-[var(--subTxt)]">필라코리아2025가 더 궁금하다면?</h2>
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