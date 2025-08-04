import {Desktop} from "shared/ui";
import {DesktopHeader} from "components/header";

export const DesktopLayout = (props: any) => {
    return (
        <Desktop
            headerSlot={<DesktopHeader />}/>
    )
}