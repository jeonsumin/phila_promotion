import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

type Props = {
    item: any
    index: number;
}

export const ExhibitionDetailView = (props: Props) => {
    const {item, index} = props;
    const t = useSelector(currentTranslation);

    return (
        <div className="flex flex-col w-full justify-center items-center gap-3.5 mb-10">
            <div className="w-full h-60 bg-[var(--grayBg)]">
                <div className="flex justify-end items-end translate-y-45 translate-x-[-15px]">
                    <ExhibitionLocationButton title="체험관 위치 안내" subTitle={t(item.positionInformation)}>
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