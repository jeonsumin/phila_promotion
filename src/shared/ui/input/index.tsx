import {ChangeEventHandler, InputHTMLAttributes, RefObject} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    value?: string;
    id?: string;
    inputMode?: string;
    inputRef?: RefObject<HTMLInputElement | null>;
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
        id,
        inputRef,
        type = 'text',
        inputMode,
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
                id={id}
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                inputMode={inputMode}
                className={`px-[12px] py-[14px] rounded-md bg-[var(--lightGrayBg)] text-[14px] border-none ${className} w-full`}

            />
        </div>
    );
};
