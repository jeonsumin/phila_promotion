import {Link} from "react-router-dom";
import {routesBuilder} from "shared/config/routes";

export const PlaceCard = (props:any) => {
    return (
        <Link to={routesBuilder.placeDetail(props.target, props.index)}>
            <div>
                <img src="https://picsum.photos/300/200" className="w-full rounded-2xl"
                     alt="randomImg"/>
                <div
                    className="absolute bottom-0 w-full py-5 bg-gradient-to-b from-black/0 to-black/60 justify-center flex flex-col items-center rounded-b-2xl gap-[4px]">
                    <h1 className="text-[18px] font-bold text-white">{props.item.title}</h1>
                    <p className="text-[16px] font-normal text-white ">{props.item.subTitle}</p>
                </div>
            </div>
        </Link>
    )
}