import { TopicList } from "components";
import {useLayout} from "shared/ui/layout/useLayout";
import {useSelector} from "react-redux";
import {currentTranslation} from "features/changeLang";

export const ChoiceTopicPage = () => {
    const t = useSelector(currentTranslation);

    useLayout({
        routeName: t('tre_detail_type_001'),
        hasFooter: false
    })
    return <TopicList/>
}
