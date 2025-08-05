import {Button} from "shared/ui";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {ArrowRight} from "lucide-react";
import {OptionItem} from "features/select-option";
import {TREASURE} from "shared/constant/treasure";
import {useTopic} from "components/topic/lib/useTopic";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const TopicList = () => {
    const {selectedOption, handleSelect} = useTopic();
    const t = useSelector(currentTranslation);
    return (
        <div className="py-10 px-5 space-y-5">
            <p className="text-lg font-bold">{t('tre_detail_type_002')}</p>

            <div className="flex flex-col gap-3.5">
                {
                    TREASURE.map((item, index: number) =>
                        <OptionItem
                            key={index}
                            label={t(item.title)}
                            active={selectedOption === index}
                            onClick={() => handleSelect(index)}
                        />
                    )
                }
            </div>

            <div className="flex w-full justify-center items-center mt-20">
                <Button variant="rounded" url={routesBuilder.treasureResult(selectedOption)}>
                    <ArrowRight/>
                </Button>
            </div>
        </div>
    )
}