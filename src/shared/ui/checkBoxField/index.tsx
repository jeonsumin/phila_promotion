type Props = {
    label?: string;
    id?: string;
    htmlFor?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent) => void;
    onLabelClick?: (e: React.MouseEvent<HTMLSpanElement>) => void; // 라벨 클릭 핸들러 추가
    className?: string;
    require?: boolean;
};

export const CheckBoxField = (props: Props) => {
    const {
        label,
        id,
        htmlFor,
        checked,
        onChange,
        className,
        onLabelClick,
        require,
    } = props
    return (
        <div className="flex flex-col justify-center">
            <label htmlFor={htmlFor || id} className=" form_chk">
                <input
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <span className='chk_mark'></span>
                <span className={`text-sm text-[var(--subTxt)] font-normal ${className}`} onClick={onLabelClick}>
                    {label}

                </span>
            </label>

        </div>
    )
}