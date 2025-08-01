import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {ROUTES, routesBuilder} from "shared/config/routes";
import {useParams} from "react-router-dom";
import {RECOMMEND_RESULT} from "shared/constant/recommend";

export const RecommendResultPage = () => {
    const {target, id} = useParams();
    const result = RECOMMEND_RESULT.find(ex => ex.type === target);


    useLayout({
        routeName: "체험추천",
        hasFooter: false,
    })

    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full gap-5 py-10 px-5 justify-start items-center text-center">
                <p className="text-base font-normal leading-relaxed">{result?.description}</p>
                <h1 className={`text-4xl font-bold text-[${result?.color}]`}>{result?.title}</h1>
            </div>
            <div className='w-full h-[200px] '>
                <img src="https://picsum.photos/300/200" className="w-full"
                     alt="randomImg"/>
                <div
                    className="flex flex-col justify-center items-center text-center w-full gap-5 py-5 px-5 bg-[var(--grayBg)]">
                    <p className="text-base font-normal"> 이런 당신께 추천해요.</p>
                    <h1 className={`text-xl font-bold ${result?.color}`}>{result?.recommend[Number(id)].title}</h1>
                    <p>
                        {result?.recommend[Number(id)].caption}
                    </p>
                </div>
                <div className="flex flex-col p-5 gap-3.5">
                    <Button url={routesBuilder.recommendOther(target, id)} color={"light"}
                            className="text-black">다른 추천 체험 보기</Button>
                    <Button url={ROUTES.HOME}>확인</Button>
                </div>
            </div>
        </div>

    )
}