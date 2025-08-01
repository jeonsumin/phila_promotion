import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {Survey} from "components/survey";
import {SATISFACTION} from "shared/constant/satisfaction";
import {useState} from "react";

export const SurveyPage = () => {
    const [intro, setIntro] = useState<boolean>(true)

    useLayout({
        routeName: "만족도 조사",
        hasFooter: false,
    })


    const SurveyIntro = () => (
        <div className="flex flex-col px-5 py-10 justify-center items-center text-center gap-5">
            <h1 className="font-bold text-xl">
                안녕하세요!<br/>
                필라코리아2025에<br/>
                방문해 주셔서 감사합니다.!
            </h1>
            <div className="flex flex-col gap-3.5 text-base font-normal">
                <p>
                    본 설문은 필라코리아2025에 대한<br/>
                    만족도를 조사하기 위한 것으로, <br/>
                    편안하게 응답해 주시면 감사하겠습니다.
                </p>
                <p>여러분의 소중한 의견은 앞으로<br/>
                    더 나은 전시를 준비하는 데 큰 도움이 됩니다.<br/>
                    참여해 주셔서 감사합니다.
                </p>
            </div>
            <div className="px-5">
                <img src="/assets/images/mascot_group.png" alt=""/>
            </div>

            <div className="w-full p-5">
                <Button
                    onClick={() => {
                        setIntro(prevState => !prevState)
                    }}
                >
                    시작하기
                </Button>
            </div>
        </div>
    )


    if (intro) return SurveyIntro();

    return (
        <div className="flex flex-col px-5 py-10 justify-center items-center gap-5">
            <Survey data={SATISFACTION} type={"survey"}/>
        </div>
    )

}
