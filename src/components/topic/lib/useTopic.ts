import { useState} from "react";

export const useTopic = () => {
    const [selectedOption, setSelectedOption] = useState<number|null>(null)

    const handleSelect = (question: number) => {

        setSelectedOption(question);
    //     const alreadySelected = current.includes(index)
    //
    //     let updated: number[]
    //     if (alreadySelected) {
    //         updated = current.filter((i: any) => i !== ExhibitionDetailView.tsx)
    //     } else {
    //         updated = [...current, ExhibitionDetailView.tsx]
    //     }
    //
    //     setSelectedOption((prev: any) => ({...prev, [question]: updated}))
    }

    return {selectedOption, handleSelect}
}
