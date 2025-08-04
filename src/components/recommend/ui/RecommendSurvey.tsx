import {useRecommend} from "../lib/useRecommend";
import {OptionItem} from "features/select-option";
import {RECOMMEND} from "shared/constant/recommend";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const RecommendSurvey = () => {
    const recommend = useRecommend();
    const t = useSelector(currentTranslation);
    return (
        <div className="flex flex-col gap-10">
            {
                RECOMMEND.map((item: any, index: number) =>
                    <div key={index} className="flex flex-col w-full gap-5">
                        <div className="flex flex-col">
                            <div className="flex gap-2.5 font-bold">
                                <h1>Q{index + 1}.</h1>
                                <h1 className="">{t(item.question)}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {item.options.map((option: any, optionNum: number) => (
                                    <OptionItem
                                        key={optionNum}
                                        label={t(option.label)}
                                        active={recommend.selectedOption[index] === optionNum || false}
                                        isDescriptive={recommend.selectedOption[index] === item.options.lastIndexOf()}
                                        onClick={() => recommend.handleSelect(index, optionNum)}
                                    />
                                )
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}