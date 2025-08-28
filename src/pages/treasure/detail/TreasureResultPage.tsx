import {useLayout} from "shared/ui/layout/useLayout";
import {useParams} from "react-router-dom";
import {TREASURE} from "shared/constant/treasure";
import {QrScanner} from "features/qrCodeScanner";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {useMemo} from "react";
import {useModal} from "shared/config/ModalProvider";
import {Button} from "shared/ui";

export const TreasureResultPage = () => {

    const {id} = useParams();
    const {treasure, randomHint} = useMemo(() => {
        const treasure: any = TREASURE.find(ex => ex.id == Number(id))

        const randomHint = Math.floor(Math.random() * treasure.option.length);
        return {treasure, randomHint}
    }, [])
    const t = useSelector(currentTranslation);
    const modal = useModal();


    const onClick = () => {
        modal.showModal({
            title: t("stamp_detail_031"),
            body: <QrScanner treasure={id} hint={randomHint}/>
        })
    }

    useLayout({
        routeName: t('tre_detail_type_001'),
        hasFooter: false
    })

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="py-10 px-5">
                <h1 className="text-base font-normal text-[var(--subTxt)]">{t(treasure.title)} {t("tre_detail_result_trd1_002")}</h1>
            </div>

            <div className="w-full bg-[var(--listBd)] px-12 py-5">
                <img src={treasure.src} alt=""/>
            </div>

            <div className="flex flex-col px-5 py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">

                <h1 className="text-[22px] font-bold text-[var(--phliaBlue)] leading-10">HINT</h1>

                <div
                    className=" flex flex-col bg-white rounded-lg w-full justify-center items-center px-5 text-center p-5">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-[var(--lightGrayBg)] w-full">
                        <p className="text-base">
                            {t(treasure.option[randomHint].hint)}
                        </p>
                        <p className="text-[var(--phliaBlue)]">{treasure.option[randomHint].number}</p>
                    </div>

                </div>
            </div>

            <div className="w-full p-5">
                <Button onClick={onClick}>{t("stamp_detail_031")}</Button>
            </div>
        </div>
    )
}