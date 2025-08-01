import {useLayout} from "shared/ui/layout/useLayout";
import {Button} from "shared/ui";
import {ROUTES} from "shared/config/routes";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";

export const TreasurePage = () => {
    useLayout()

    return (
        <>
            <div className="flex flex-col py-[40px] px-[20px] w-full justify-center items-center gap-3.5">
                <p>작품관에 숨겨진 QR을 찾아라!</p>
                <h1 className="text-4xl font-bold leading-10">보물찾기</h1>
            </div>

            <div className="w-full h-60 bg-gray-500">
            </div>

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">체험 방법</h1>
                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col p-5">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5  border-b border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.1
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">시작하기
                            버튼을 눌러 원하는<br/>
                            주제를 선택하세요.
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-[var(--lightGrayBg)] w-full">
                        <div>
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[20px] py-[10px] rounded-full text-white">STEP.2
                            </p>
                        </div>
                        <div
                            className="text-center justify-start text-DDX-Color-Text-1 text-base font-normal font-['Paperlogy'] leading-relaxed">작품관에
                            숨겨진 QR코드를 찾아<br/>스캔해보세요.
                        </div>
                    </div>

                </div>
            </div>


            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">
                <h1 className="text-xl font-bold text-[var(--phliaBlue)] leading-10">리워드 수령 안내</h1>

                <ExhibitionLocationButton title="리워드 데스크 위치 안내" subTitle="리워드 존은 출입구를 지나 인포메이션 기준 통로 끝에 위치해 있습니다."/>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col px-[20px]">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>미션 완료 시 리워드 쿠폰이 활성화됩니다.</p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center text-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>쿠폰함에서 쿠폰을 확인한 후, 이벤트 존의<br/>
                            스텝에게 보여주면<br/>
                            리워드를 받으실 수 있습니다.</p>
                    </div>

                </div>
            </div>

            <div className="p-5">
                <Button url={ROUTES.TREASURE_DETAIL}>시작하기</Button>
            </div>
        </>
    )
}