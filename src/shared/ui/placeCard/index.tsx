import {Link} from "react-router-dom";
import {routesBuilder} from "shared/config/routes";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang/model/slice";

export const PlaceCard = (props:any) => {
    const t = useSelector(currentTranslation);
    return (
        <Link to={routesBuilder.placeDetail(props.target, props.index)}>
            <div className="relative">
                <img src={props.item.img} className="w-full rounded-2xl"
                     alt={props.item.img}/>
                <div
                    className="absolute bottom-0 w-full py-5 bg-gradient-to-b from-black/0 to-black/60 justify-center flex flex-col items-center rounded-b-2xl gap-[4px] text-center">
                    <h1 className="text-[18px] font-bold text-white">{t(props.item.title)}</h1>
                    <p className="text-[16px] font-normal text-white ">{t(props.item.subTitle)}</p>
                </div>
            </div>
        </Link>
    )
}