import {ReactNode} from "react";
import {Link} from "react-router-dom";
import {cn} from "shared/utils";
import {cva, VariantProps} from "class-variance-authority";

type Props = {
    url?: string;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: string;
    color?: string;
    disabled?: boolean;
}

const buttonVariants = cva(
    "flex items-center justify-center font-bold text-[var(--white)] text-[18px]",
    {
        variants: {
            variant: {
                default: 'w-full h-[60px] rounded-full',
                fixed: 'w-full h-[60px] bottom-0',
                label: 'px-[20px] py-[6px] rounded-full',
                rounded: 'size-20 rounded-full',
            },
            color: {
                default: 'bg-[var(--point)]',
                gray: 'bg-[var(--subTxt)] ',
                light: 'bg-[var(--lightGrayBg)] text-[var(--subTxt)]',
                white: 'bg-white text-black ',
                none: '',
            }
        },
        defaultVariants: {
            variant: 'default',
            color: 'default'
        },
    },
)


export const Button = (props: Props & VariantProps<typeof buttonVariants>) => {
    const {url = '#', children, onClick, variant, color, className,disabled = false} = props;
    return (
        <Link to={url}>
            <button
                className={cn(
                    buttonVariants({variant, color, className})
                    , className)
                }
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}