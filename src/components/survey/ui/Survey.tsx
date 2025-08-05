import {OptionItem, useSelectOption} from "features/select-option";
import {TextArea} from "shared/ui/textArea";
import {Button} from "shared/ui";

export const Survey = (props: any) => {

    const options = useSelectOption(props.data, props.type);

    return (
        <div className="flex flex-col gap-10">
            {
                props.data.map((item: any, index: number) =>
                    <div key={index} className="flex flex-col w-full gap-5">
                        <div className="flex flex-col">
                            <div className="flex gap-2.5 font-bold">
                                <h1>Q{index + 1}.</h1>
                                <h1 className="">{options.t(item.question)}</h1>
                            </div>
                            {item.multi && <p className="font-sm ml-10">{options.t('pop_survey_cplt_003')}</p>}
                        </div>
                        <div className="flex flex-col gap-3.5">
                            {item.options.map((option: string, optionNum: number) => (
                                    <OptionItem
                                        key={optionNum}
                                        label={options.t(option)}
                                        active={options.selectedOption[index]?.includes(optionNum) || false}
                                        isDescriptive={options.selectedOption[index] === item.options.lastIndexOf()}
                                        onClick={() => options.handleSelect(index, optionNum)}
                                    />
                                )
                            )}

                            {options.isDescriptive[index] && <TextArea value={options.descriptiveText[index]}
                                                                       setValue={(e: string) => options.setDescriptive(index, e)}/>}
                            {item.descriptive && <TextArea value={options.descriptiveText[index]}
                                                           setValue={(e: string) => options.setDescriptive(index, e)}/>}
                        </div>
                    </div>
                )
            }
            <div>
                <Button
                    color={options.isSubmit ? 'default' : 'gray'}
                    disabled={!options.isSubmit}
                    onClick={options.onSubmitSurvey}
                >
                    {options.t('pop_survey_cplt_004')}
                </Button>
            </div>
        </div>
    )
}