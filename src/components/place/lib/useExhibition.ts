import { useMemo, useState} from "react";
import {EXHIBITION} from "shared/constant/place";

export const useExhibition = () => {
    const [currentExhibitionCode, setCurrentExhibitionCode] = useState<string>("theme");

    const exhibitionList = useMemo(() => {
        return EXHIBITION.map(ex => ({
            ...ex,
            isActive: ex.code === currentExhibitionCode,
        }));
    }, [currentExhibitionCode]);

    const selectedExhibition = useMemo(() => {
        return EXHIBITION.find(ex => ex.code === currentExhibitionCode)!.item;
    }, [currentExhibitionCode]);

    const onClick = (code: string) => {
        setCurrentExhibitionCode(code);
    };

    return {
        exhibition: exhibitionList,
        selectedExhibition,
        currentExhibitionCode,
        onClick,
    };
};