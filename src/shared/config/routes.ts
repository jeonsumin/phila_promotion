export const ROUTES = {
    CHECK_IN: '/check-in',

    HOME: "/main",

    PLACE: "/place",
    PLACE_DETAIL: "/place/:target/:id",

    RECOMMEND: '/main/recommend',
    RECOMMEND_RESULT: '/main/recommend/result/:target/:id',
    RECOMMEND_OTHER: '/main/recommend/other/:target/:id',


    SURVEY: "/main/survey",
    EVENT: "/main/event",

    STAMP: "/stamp",
    STAMP_MISSION: "/stamp/mission/:target",

    TREASURE: "/treasure",
    TREASURE_DETAIL: "/treasure/topic",
    TREASURE_RESULT: "/treasure/topic/:id",

    COUPON: "/coupon",



}


export const routesBuilder = {
    placeDetail: (target: string, id: any) => `${ROUTES.PLACE}/${target}/${id}`,
    stampMissionDetail: (target: string) => `${ROUTES.STAMP}/mission/${target}`,
    treasureResult: (id: any) => `${ROUTES.TREASURE_DETAIL}/${id}`,
    recommendResult: (target: string, id: any) => `${ROUTES.RECOMMEND}/result/${target}/${id}`,
    recommendOther: (target: any, id: any) => `${ROUTES.RECOMMEND}/other/${target}/${id}`
}