import {NavItem} from "features/navItem/ui/NavItem";
import {navItems} from "../model/NavigationItem";
import {useSelector} from "react-redux";
import {RootState} from "app/store";

export const NavigationBar = () => {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 flex items-center bg-[var(--white)] max-w-[var(--maxWidth)] mx-auto h-[60px] z-10">
            {navItems.map((item, index) => (
                <NavItem key={`nav_${index}`} {...item}/>
            ))}
        </nav>
    )
}