export const Image = (props: any) => {
    return (
        <img
            src={props.item.src}
            alt={`img_${props.item.src}`}
            className={props.item.className}
        />
    )
}