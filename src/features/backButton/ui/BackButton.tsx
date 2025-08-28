import {ChevronLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const BackButton = () => {
    const navigate = useNavigate();
    const referrer = useSelector((state: RootState) => state.layout.referrer);
    const onClick = () => {
        referrer ? navigate(referrer) : navigate(-1)
    }
    return <button
        onClick={onClick}
        className={"absolute left-6"}
    >
        <ChevronLeft size={20}/>
    </button>

}