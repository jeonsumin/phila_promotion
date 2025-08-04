import {MobileHeader, NavigationBar} from "components";
import {Mobile} from 'shared/ui'

export const MobileLayout = () => (
    <Mobile
        headerSlot={<MobileHeader/>}
        navigationSlot={<NavigationBar/>}
    />
)

