import {useEffect, useState} from 'react'
import {updateSurvey} from "entities/survey/api/surveyApi";
import {transformToQKeys} from "shared/utils/utils";

export const useSelectOption = (survey: any[], type: string) => {
    const [selectedOption, setSelectedOption] = useState<any>({})
    const [isDescriptive, setIsDescriptive] = useState<any>({})
    const [descriptiveText, setDescriptiveText] = useState<any>({});

    const handleSelect = (question: number, index: number) => {
        const current = selectedOption[question] || []
        const multiCount = survey[question].multi ?? 1
        const alreadySelected = current.includes(index)

        let updated: number[]
        if (multiCount === 1) {
            updated = [index]
        } else {
            if (alreadySelected) {
                updated = current.filter((i: any) => i !== index)
            } else {
                if (current.length >= multiCount) return
                updated = [...current, index]
            }
        }
        setSelectedOption((prev: any) => ({...prev, [question]: updated}))

        const descriptiveYn = survey[question].descriptive ?? false
        const lastOption = survey[question].options.length - 1 == index
        descriptiveYn && setIsDescriptive((prev: any) => ({...prev, [question]: lastOption}))
        setSelectedOption((prev: any) => ({...prev, ...descriptiveText}))

    }

    const setDescriptive = (question: number, value: string) => {

        setDescriptiveText((prev: any)=> ({...prev, [question] : value}))
    }

    const onSubmitSurvey = async () => {
        const result = transformToQKeys(selectedOption);
        await updateSurvey(result);
    }

    const isSubmit = Object.keys(selectedOption).length > 14

    return {selectedOption, isDescriptive, descriptiveText,isSubmit, handleSelect, setDescriptive, onSubmitSurvey}
}
