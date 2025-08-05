import {Button} from "shared/ui";
import {Input} from "shared/ui/input";

type Props = {
    label?: string;
    active?: boolean;
    isDescriptive?: boolean;
    onClick?: () => void;
};

export const OptionItem = ({label, active, isDescriptive, onClick }: Props) => {

    return (
        <>
            <Button
                className={`justify-start px-7.5 font-normal ${isDescriptive && 'hidden'}`}
                color={active ? "default" : "light"}
                onClick={onClick}
            >
                {label}
            </Button>

        </>
    );
};