import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {useParams} from "react-router-dom";

type Props = {
    item: any
    index: number;
}

export const ExhibitionDetailView = (props: Props) => {
    const {item, index} = props;
    const {target} = useParams();
    const routeName = useSelector((state: RootState) => state.layout.routeName);
    const t = useSelector(currentTranslation);

    console.log('ExhibitionDetailView item :: ', item);
    return (
        <div className="flex flex-col w-full justify-center items-center gap-3.5 mb-10">
            <div className={`w-full h-60 bg-[var(--grayBg)] relative`}>
                <img src={item.img} alt={item.img} className="w-full h-full object-cover"/>
                <div className="flex justify-end items-end absolute right-4 bottom-3">
                    <ExhibitionLocationButton title={routeName} subTitle={t(item.positionInformation)} className="py-1/2 px-1/2"
                                              index={index} map={item.map}>
                        <img src="/assets/images/icon/icn_pin.svg" alt=""/>
                    </ExhibitionLocationButton>
                </div>
            </div>

            <div className="flex flex-col w-full px-5 mt-10 gap-3.5 justify-center items-center text-center">
                <h1 className="text-xl font-bold">{t(item.title)}</h1>
                <p className="text-[var(--primary)] text-lg font-semibold">{t(item.subTitle)}</p>

                <p className="text-base">{t(item.caption)}</p>
            </div>
        </div>
    )
}