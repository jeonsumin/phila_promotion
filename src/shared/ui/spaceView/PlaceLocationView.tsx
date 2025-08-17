import {ZoomableImage} from "components/zoomableImage/ui/ZoomableImage";
import {useLocation} from "react-router-dom";

export const PlaceLocationView = (props:any) => {
    const location = useLocation();

    const [, , targetCode, idStr] = location.pathname.split('/');

    return (
        <div className="flex flex-col">
            <ZoomableImage src={ props.map || `/assets/images/place-map/${targetCode}/map${props.index}.png`} alt="place"/>
        </div>
    )
}