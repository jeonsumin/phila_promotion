import {useState} from "react";

export const useTopic = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    const handleSelect = (question: number) => {
        setSelectedOption(question);
    }

    return {selectedOption, handleSelect}
}
