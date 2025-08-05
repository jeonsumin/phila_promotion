import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {ROUTES} from "shared/config/routes";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const TreasurePage = () => {
    const t = useSelector(currentTranslation);
    useLayout()

    return (
        <>
            <div className="flex flex-col py-[40px] px-[20px] w-full justify-center items-center gap-3.5">
                <p>{t('tre_main_001')}</p>
                <h1 className="text-4xl font-bold leading-10">{t('tre_main_002')}</h1>
            </div>

            <div className="w-full h-60 bg-gray-500">
            </div>

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">{t('tre_main_003')}</h1>
                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col p-5">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.1
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">{t('tre_main_004')}
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.2
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">{t('tre_main_005')}
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">
                <h1 className="text-xl font-bold text-[var(--phliaBlue)] leading-10">{t('tre_main_006')}</h1>

                <ExhibitionLocationButton title={t("pop_space_loc_019")} subTitle={t("pop_tre_main_loc_002")}/>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col px-[20px]">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>{t('tre_main_007')}</p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center text-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>{t('tre_main_008')}</p>
                    </div>

                </div>
            </div>

            <div className="p-5">
                <Button url={ROUTES.TREASURE_DETAIL}>{t('tre_main_010')}</Button>
            </div>
        </>
    )
}