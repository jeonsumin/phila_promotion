import {Button} from "shared/ui";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useModal} from "shared/config/ModalProvider";
import {ROUTES} from "shared/config/routes";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const QrSuccess = () => {
    const t = useSelector(currentTranslation);
    const param = useLocation()
    const modal = useModal();
    const navigate = useNavigate();
    const [data, setData] = useState<any | null>(null);

    const qrSuccessHandler = () => {
        modal.allClear();
    }

    useEffect(() => {
        setData(() => {

            return param.pathname.includes("stamp") ? {
                title: t('pop_stamp_qr_004'),
                subtitle: t('pop_stamp_qr_005'),
            } : {
                title: t("pop_tre_qr_001"),
                subtitle: t("pop_tre_qr_002"),
                caption: t("pop_tre_qr_003")
            }
        })
    }, []);

    return (<>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[99999] gap-5 backdrop-blur-[2px]"/>
            <div
                className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-[10px] max-w-screen-sm w-[90%] gap-5 py-10 z-[99999] text-white ">

                <h1 className="text-4xl font-bold text-[var(--primary)] ">{data?.title}</h1>
                <div>
                    <p>{data?.subtitle}</p>
                    <p>{data?.caption}</p>
                </div>

                <Button url={param.pathname.includes("stamp") ? ROUTES.STAMP : ROUTES.COUPON}
                        onClick={qrSuccessHandler}>{t("common_01")}</Button>
            </div>
        </>
    )
}