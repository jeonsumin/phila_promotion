import {Link, useNavigate} from "react-router-dom";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang/model/slice";
import {isMobile} from "react-device-detect";
import {useLayout} from "shared/ui/layout/useLayout";
import {useModal} from "shared/config/ModalProvider";
import {ExhibitionDetailPages} from "pages/home/exhibition";
import {EXHIBITION} from "shared/constant/place";

export const PlaceCard = (props: any) => {
    const t = useSelector(currentTranslation);
    const navigate = useNavigate();
    const modal = useModal();

    const onClick = () => {

        const headerName = t(EXHIBITION.find(ex => ex.code === props.target)!.title)
        if (isMobile) {
            // navigate(routesBuilder.placeDetail(props.target, props.index))
            modal.showModal({
                title: headerName,
                body: <ExhibitionDetailPages code={props.target} id={props.index}/>
            })
        }
    }

    return (
        // <Link to={isMobile ? routesBuilder.placeDetail(props.target, props.index) : ""}>
        <div className="relative" onClick={onClick}>
            <img src={`/assets/images/${props.item.img}.png`} className="w-full rounded-2xl"
                 alt={props.item.img}/>
            <div
                className="absolute bottom-0 w-full py-5 bg-gradient-to-b from-black/0 to-black/60 justify-center flex flex-col items-center rounded-b-2xl gap-[4px] text-center">
                <h1 className="text-[18px] font-bold text-white">{t(props.item.title)}</h1>
                <p className="text-[16px] font-normal text-white ">{t(props.item.subTitle)}</p>
            </div>
        </div>
        // </Link>
    )
}
