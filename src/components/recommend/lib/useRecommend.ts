import {useEffect, useState} from "react";
import {RECOMMEND, RECOMMEND_RESULT} from "shared/constant/recommend";
import {useNavigate} from "react-router-dom";
import {routesBuilder} from "shared/config/routes";
import {updateRecommend} from "entities/recommend/api/recommendApi";

export const useRecommend = () => {
    const [selectedOption, setSelectedOption] = useState<any>({})
    const [result, setResult] = useState<any>({A: 0, B: 0, C: 0, D: 0})
    const navigate = useNavigate();

    const handleSelect = (question: number, index: number) => {

        setSelectedOption((prev: any) => ({...prev, [question]: index}))
    }

    useEffect(() => {
        console.log('selected option :: ', selectedOption);
        const counts: any = {A: 0, B: 0, C: 0, D: 0};

        Object.entries(selectedOption).forEach(([questionIndex, optionIndex]: any) => {
            const question = RECOMMEND[questionIndex].options[optionIndex]

            counts[question.type] += question.point;
        })

        setResult(counts);
    }, [selectedOption]);

    useEffect(() => {

        if (!result) return;

        const top = Object.entries(result).reduce(
            (acc: any, curr: any) => (curr[1] > acc[1] ? curr : acc),
            ["", -Infinity]
        );

        console.log("🔥 최종 추천 타입:", top[0]);

        const recommendResult = RECOMMEND_RESULT.find(ex => ex.type === top[0])!;
        const randomNum: number = recommendResult.recommend.length!;
        const random = Math.floor(Math.random() * randomNum)

        const onSubmit = async () => {
            await updateRecommend(recommendResult.title, recommendResult.recommend[random].title)
            navigate(routesBuilder.recommendResult(top[0], random))
        }
        if (Object.keys(selectedOption).length == 6) {
            onSubmit();
        }

    }, [result]);

    return {selectedOption, handleSelect}
}