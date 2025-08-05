import {Desktop} from "shared/ui";
import {DesktopHeader} from "components/header";

export const DesktopLayout = () => {
    return (
        <Desktop
            headerSlot={<DesktopHeader />}/>
    )
}