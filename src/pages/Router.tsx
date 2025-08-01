import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";
import {ROUTES} from "shared/config/routes";
import {HomePage} from "pages/home/HomePage";
import {StampPage} from "pages/stamp";
import {TreasurePage} from "pages/treasure";
import {MobileLayout} from "app/layout/MobileLayout";
import {BetaCheckInPage} from "pages/checkin/desktop";
import {BetaCheckInScreen} from "pages/checkin/mobile";
import {DesktopLayout} from "app/layout/DesktopLayout";
import {ExhibitionDetailPages} from "pages/home/exhibition";
import {CouponPage} from "pages/coupon";
import {RecommendPage} from "pages/home/recommend/RecommendPage";
import {SurveyPage} from "pages/home/SurveyPage";
import {EventPage} from "pages/home/EventPage";
import {RecommendResultPage} from "pages/home/recommend/RecommendResultPage";
import {OtherRecommendPage} from "pages/home/recommend/OtherRecommendPage";
import {MissionPage} from "pages/stamp/detail";
import {ChoiceTopicPage} from "pages/treasure/detail/ChoiceTopicPage";
import {TreasureResultPage} from "pages/treasure/detail/TreasureResultPage";
import {ModalProvider} from "shared/config/ModalProvider";
import {ProtectedView} from "shared/config/ProtectedView";
import {Commons} from "shared/utils/commons";

export const Router = () => (
    <BrowserRouter>
        <ModalProvider>
        <Commons/>
            <BrowserView>
                <Routes>
                    <Route element={<DesktopLayout/>} path={"/"}>
                        <Route path={"/"} element={<Navigate to={ROUTES.CHECK_IN} replace/>}/>
                        <Route element={<BetaCheckInPage/>} path={ROUTES.CHECK_IN}/>
                    </Route>
                    <Route path={"*"} element={<Navigate to={ROUTES.CHECK_IN} replace/>}
                    />
                </Routes>
            </BrowserView>

            <MobileView>
                <Routes>
                    <Route element={<BetaCheckInScreen/>} path={ROUTES.CHECK_IN}/>
                    <Route element={<ProtectedView/>}>

                        <Route element={<MobileLayout/>} path={"/"}>
                            <Route path={"/"} element={<Navigate to={ROUTES.HOME} replace/>}/>
                            <Route element={<HomePage/>} path={ROUTES.HOME}/>

                            <Route element={<RecommendPage/>} path={ROUTES.RECOMMEND}/>
                            <Route element={<RecommendResultPage/>} path={ROUTES.RECOMMEND_RESULT}/>
                            <Route element={<OtherRecommendPage/>} path={ROUTES.RECOMMEND_OTHER}/>

                            <Route element={<SurveyPage/>} path={ROUTES.SURVEY}/>
                            <Route element={<EventPage/>} path={ROUTES.EVENT}/>

                            <Route element={<StampPage/>} path={ROUTES.STAMP}/>
                            <Route element={<MissionPage/>} path={ROUTES.STAMP_MISSION}/>

                            <Route element={<TreasurePage/>} path={ROUTES.TREASURE}/>
                            <Route element={<ChoiceTopicPage/>} path={ROUTES.TREASURE_DETAIL}/>
                            <Route element={<TreasureResultPage/>} path={ROUTES.TREASURE_RESULT}/>

                            <Route element={<CouponPage/>} path={ROUTES.COUPON}/>
                            <Route element={<TreasurePage/>} path={ROUTES.TREASURE_DETAIL}/>
                            <Route element={<ExhibitionDetailPages/>} path={ROUTES.PLACE_DETAIL}/>
                        </Route>
                    </Route>

                </Routes>
            </MobileView>
        </ModalProvider>
    </BrowserRouter>
);
