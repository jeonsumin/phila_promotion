type Props = {
    message?: string;
    useYn?: string;
}
export const SuccessDimed = (props: any) => {

    const {message, useYn = "Y"} = props;

    return (
        <div
            className={`absolute h-full left-0 right-0 rounded-2xl ${ useYn == 'Y' && 'bg-black/80  backdrop-blur-xs'} flex justify-center items-center `}>
            <h1 className="text-white text-2xl font-bold ">{useYn == 'Y' && message}</h1>
        </div>
    )
}