import {useLayout} from "shared/ui/layout/useLayout";
import {ExhibitionLocationButton} from "features/ExhibitionLocationButton";
import {MissionList} from "components/mission/ui/MissionList";
import {StampList} from "components/mission";

export const StampPage = () => {

    useLayout()

    return (
        <div>
            <div className="flex flex-col py-[40px] px-[20px] w-full justify-center items-center gap-3.5">
                <p>건곤감리우표Bro</p>
                <h1 className="text-4xl font-bold leading-10">스탬프투어</h1>
            </div>

            <StampList />

            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#FCEBEF] gap-5">
                <h1 className="text-xl font-bold text-[var(--primary)] leading-10">리워드 지급 안내</h1>


                <div className="bg-white rounded-lg w-full justify-center items-center flex flex-col p-5">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">01
                            </p>
                        </div>
                        <p>미션 3개 완료 시 리워드 지급</p>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">02
                            </p>
                        </div>
                        <p>미션 5개 완료 시 추가 리워드 지급</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3.5 py-3.5 w-full">
                        <div className="w-20">
                            <p
                                className="text-sm font-bold bg-[var(--primary)] px-[30px] py-[10px] rounded-full text-white">03
                            </p>
                        </div>
                        <p>보너스 미션 완료 시 보너스 리워드 지급</p>
                    </div>

                </div>
            </div>


            <div className="flex flex-col px-[20px] py-[40px] w-full justify-center items-center bg-[#DBECF5] gap-5">

                <h1 className="text-xl font-bold text-[var(--phliaBlue)] leading-10">리워드 수령 안내</h1>

                <ExhibitionLocationButton title="리워드 데스크 위치 안내" subTitle="입구에서 오른쪽 통로 끝까지 이동하시면 위치해 있습니다."/>

                <div
                    className=" flex flex-col bg-white rounded-lg w-full justify-center items-centerpx-[20px] text-center">

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>미션 완료 시 리워드 쿠폰이 활성화됩니다.</p>
                    </div>

                    <div
                        className="flex flex-col justify-center items-center gap-3.5 py-3.5 border-b border-[var(--lightGrayBg)] w-full">
                        <p>리워드 데스크 스태프에게 쿠폰을 보여주시면<br/>
                            리워드를 받으실 수 있습니다.</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col px-5 py-3.5 w-full justify-center items-center bg-[#FCEBEF] ">
                <p className="text-[var(--primary)]">쿠폰함에서 리워드를 확인해 주세요.</p>
            </div>

            <MissionList />
        </div>
    )
}