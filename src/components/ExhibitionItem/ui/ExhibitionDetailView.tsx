import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";
import {useParams} from "react-router-dom";
import {cn} from "shared/utils";

type Props = {
    item: any
    index: number;
    target?: string;
    isBg?: boolean;
}

export const ExhibitionDetailView = (props: Props) => {
    const {item, index, target} = props;
    const routeName = useSelector((state: RootState) => state.layout.routeName);
    const t = useSelector(currentTranslation);

    return (
        <div className="flex flex-col w-full justify-center items-center mb-10">
            <div className={`w-full h-60 bg-[var(--grayBg)] relative`}>
                <img src={`/assets/images/${item.img}.png`} alt={item.img} className="w-full h-full object-cover"/>
                <div className="flex justify-end items-end absolute right-4 bottom-3">
                    <ExhibitionLocationButton
                        title={t(item.title)}
                        subTitle={t(item.positionInformation)}
                        className="py-1/2 px-1/2"
                        index={index}
                        map={item.placeImg}
                    >
                        <img src="/assets/images/icn_pin.svg" alt=""/>
                    </ExhibitionLocationButton>
                </div>

            </div>
            <div className={cn(
                "flex flex-col w-full py-10 px-5 gap-3.5 justify-center items-center text-center ",
                props.isBg ? "bg-[#F4F4F4]" : ''
            )}>
                <h1 className="text-[22px] font-bold">{t(item.title)}</h1>
                {/*<p className="text-[var(--primary)] text-lg font-semibold">{t(item.subTitle)}</p>*/}

                <p className="text-base text-[var(--subTxt)]">{t(item.caption)}</p>
            </div>
        </div>
    )
}
