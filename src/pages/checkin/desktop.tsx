import {ChangeLangButton} from "features/changeLang";
import {Button} from "shared/ui";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import {useModal} from "shared/config/ModalProvider";
import {CheckInForm} from "features/checkIn";

export const BetaCheckInPage = () => {

    const {showModal} = useModal();

    const openModal = () => {
        showModal({
            title: '체크인',
            body: <CheckInForm />,
        })
    }
    return (
        <div className="relative w-full min-h-[100dvh] text-[var(--bk)] flex flex-col items-center justify-center"
             style={{
                 backgroundImage: "url('/assets/images/betacheckin_bg_pc.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
             }}
        >
            <main
                className="w-[var(--pcContentWidth)] mx-auto;] relative pt-[60px] pb-[60px]"
            >
                <ChangeLangButton/>
                <img src="/assets/images/checkin_logo_pc.svg" alt="" className="w-[293px] mb-[70px] mx-auto"/>
                <div className="flex flex-col items-center">
                    <h2 className="text-[50px] text-[var(--white)] mb-[28px] leading-none">사전등록</h2>
                    <p
                        className="text-[100px] text-[var(--white)] font-bold mb-[40px] leading-none"
                        style={{textShadow: "0px 0px 20px #107CBA"}}
                    >OPEN</p>
                    <p className="text-[28px] text-[var(--subWhite)]">2025.9.17. ~ 9.21. / COEX 마곡</p>
                </div>

                <div className="w-full relative  mt-[76px]">
                    <span
                        className="absolute top-[-30px] left-1/2 translate-x-[-50%] w-[200px] h-[60px] bg-[var(--blue)] text-[var(--white)] font-bold flex items-center justify-center rounded-[60px] text-[28px]">EVENT</span>
                    <div className="pt-[70px] px-[20px] pb-[40px] bg-[var(--dimm)] text-center">
                        <img src="/assets/images/icon/img_pre_gift.svg" alt="" className="w-[100px] mx-auto"/>
                        <p className="font-bold mt-[40px] text-[28px] text-[var(--yellow)]">특별 리워드 증정!</p>
                        <p className="text-[20px] text-[var(--subWhite)] mt-[12px]">사전등록 + 현장방문시</p>
                    </div>
                    <Button variant="fixed" onClick={openModal}>
                        사전등록하기
                    </Button>
                </div>

            </main>

        </div>
    );
};
