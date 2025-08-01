import {ChangeEvent, ChangeEventHandler, InputHTMLAttributes} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    value?: string;
    onChange?: (e: ChangeEventHandler<HTMLInputElement>) => void;
    onLabelClick?: () => void;
    className?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    maxLength?: number;
};

export const Input = (props: Props) => {
    const {
        className,
        label,
        type = 'text',
        placeholder,
        maxLength,
        value,
        onChange,
        onLabelClick
    } = props;

    return (
        <div className="flex flex-col justify-center items-start gap-2 w-full">
            {label && <label className="text-sm font-bold text-[var(--subTxt)]" onClick={onLabelClick}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                className={`px-[12px] py-[14px] rounded-md bg-[var(--lightGrayBg)] text-[14px] border-none ${className} w-full`}

            />
        </div>
    );
};
