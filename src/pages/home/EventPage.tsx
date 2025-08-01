import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";

export const EventPage = () => {
    useLayout({
        routeName: "SNS 이벤트",
        hasFooter: false,
    })
    return (
        <div>
            <div className="w-full h-full bg-gray-500">
                <img src="https://picsum.photos/360/360" className="w-full"
                     alt="randomImg"/>
            </div>

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">리워드 지급 안내</h1>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col px-[20px]">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.1
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">
                            SNS에 필라코리아 방문 사진을<br/>
                            업로드해 주세요.
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.1
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">
                            이벤트 참여하기 버튼 누르고,<br/>
                            구글폼 작성 후 제출해 주세요.
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-5">
                <Button>이벤트 참여하기</Button>
            </div>
        </div>
    )
}