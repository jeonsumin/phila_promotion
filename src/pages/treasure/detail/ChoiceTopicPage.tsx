import { TopicList } from "components";
import {useLayout} from "shared/ui/layout/useLayout";

export const ChoiceTopicPage = () => {

    useLayout({
        routeName: '보물찾기',
        hasFooter: false
    })
    return <TopicList/>
}
