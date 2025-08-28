import {Button} from "shared/ui";
import {Input} from "shared/ui/input";
import {cn} from "shared/utils";

type Props = {
    label?: string;
    active?: boolean;
    isDescriptive?: boolean;
    onClick?: () => void;
    className?: string;
};

export const OptionItem = ({label, active, isDescriptive, onClick, className}: Props) => {

    return (
        <>
            <Button
                className={cn(`justify-start px-7.5 font-normal text-[16px] ${isDescriptive && 'hidden'}`, className)}
                color={active ? "default" : "light"}
                onClick={onClick}
            >
                {label}
            </Button>

        </>
    );
};