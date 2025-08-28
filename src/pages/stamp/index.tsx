import {useLayout} from "shared/ui/layout/useLayout";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {MissionList} from "components/mission/ui/MissionList";
import {StampList} from "components/mission";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const StampPage = () => {
    const t = useSelector(currentTranslation);

    useLayout()

    return (
        <div>
            <div className="flex flex-col py-[40px] px-[20px] w-full justify-center items-center gap-3.5">
                <p className="text-[var(--subTxt)]">{t('stamp_main_001')}</p>
                <h1 className="text-4xl font-bold leading-10">{t('stamp_main_002')}</h1>
            </div>

            <StampList />

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
            <h1 className="text-[22px] font-bold text-[var(--primary)] leading-10">{t("stamp_main_003")}</h1>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col p-5 text-center">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 pb-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">01
                            </p>
                        </div>
                        <p>{t("stamp_main_004")}</p>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">02
                            </p>
                        </div>
                        <p>{t("stamp_main_005")}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3.5 pt-3.5 w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">03
                            </p>
                        </div>
                        <p>{t("stamp_main_006")}</p>
                    </div>

                </div>
            </div>


            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">

                <h1 className="text-[22px] font-bold text-[var(--phliaBlue)] leading-10">{t("stamp_main_007")}</h1>

                <ExhibitionLocationButton className="text-[14px] font-light" title={t("pop_tre_main_loc_001")} subTitle={t("pop_tre_main_loc_002")} map={"/assets/images/stamp_map.png"}/>

                <div
                    className=" flex flex-col bg-white rounded-lg w-full justify-center items-centerpx-[20px] text-center">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>{t("stamp_main_008")}</p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>{t("stamp_main_009")}</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col px-5 py-3.5 w-full justify-center items-center bg-[#FCEBEF] ">
                <p className="text-[14px] text-[var(--primary)]">{t("stamp_main_012")}</p>
            </div>

            <MissionList />
        </div>
    )
}