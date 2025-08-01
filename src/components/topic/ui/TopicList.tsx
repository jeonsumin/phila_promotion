import {Button} from "shared/ui";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {ArrowRight} from "lucide-react";
import {OptionItem} from "features/select-option";
import {TREASURE} from "shared/constant/treasure";
import {useTopic} from "components/topic/lib/useTopic";

export const TopicList = () => {
    const {selectedOption, handleSelect} = useTopic();
    return (
        <div className="py-10 px-5 space-y-5">
            <p className="text-lg font-bold">원하는 주제를 선택해 주세요.</p>

            <div className="flex flex-col gap-3.5">
                {
                    TREASURE.map((item, index: number) =>
                        <OptionItem
                            key={index}
                            label={item.title}
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