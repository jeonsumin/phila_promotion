import {Button} from "shared/ui";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useModal} from "shared/config/ModalProvider";
import {ROUTES} from "shared/config/routes";

//TODO: 카피덱 적용하기
export const QrSuccess = () => {
    const param = useLocation()
    const modal = useModal();
    const navigate = useNavigate();
    const [data, setData] = useState<any | null>(null);

    const qrSuccessHandler = () => {
        console.log(param.pathname.includes("stamp"))
        navigate(param.pathname.includes("stamp") ? ROUTES.STAMP : ROUTES.COUPON)
        // modal.allClear();
    }

    useEffect(() => {
        setData(() => {

            return param.pathname.includes("stamp") ? {
                title: '미션 성공!',
                subtitle: '스탬프 미션을 성공하셨습니다.',
            } : {
                title: "보물찾기 성공!",
                subtitle: "보물찾기를 성공했습니다.",
                caption: "이벤트존에 방문하여 리워드를 수령해 주세요."
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
                <Button onClick={qrSuccessHandler}>확인</Button>
            </div>
        </>
    )
}