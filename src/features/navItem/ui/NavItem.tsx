import {NavLink} from "react-router-dom";

type Props = {
    to: string;
    label?: string;
    icon?: string;
}
export const NavItem = (props: Props) => {
    const {to, label, icon} = props
    return (
        <NavLink
            to={to}
            key={label}
            className={({isActive}) =>
                `w-full flex justify-center items-center text-[16px] ${isActive ? 'font-bold' : 'font-normal'}`
            }
        >
            {({isActive}) => ( // NavLink의 렌더 프롭스를 사용하여 isActive 값에 접근합니다.
                <div className="justify-center items-center">
                    {icon && <img
                        className="w-full  h-[24px] mb-[4px]"
                        src={`/assets/images/icon/${isActive ? `${icon}_on` : icon}.svg`}
                        alt={`${label} icon`}
                    />}
                    <p className="flex w-full justify-center items-center text-[12px]">{label}</p>
                </div>
            )}
        </NavLink>
    )
}