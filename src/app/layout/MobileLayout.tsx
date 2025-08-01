import {Header, NavigationBar} from "components";
import {Mobile} from 'shared/ui'

export const MobileLayout = () => (
    <Mobile
        headerSlot={<Header/>}
        navigationSlot={<NavigationBar/>}
    />
)

