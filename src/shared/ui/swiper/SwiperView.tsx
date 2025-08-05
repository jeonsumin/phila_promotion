import {Swiper, SwiperSlide} from "swiper/react";
import {ComponentType, useEffect, useRef} from "react";
import {Pagination} from "swiper/modules";
import SwiperCore from "swiper";


type SwiperViewProps<T> = {
    data: T[];
    target?: string;
    idx?: string;
    renderItem: ComponentType<{ item: T; index: number, target?: string }>;
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    loop?: boolean;
    centeredSlides?: boolean;
    onSlideChange?: (swiper: any) => void;
    className?: string;
    slideClassName?: string;
    pagination?: boolean;
    modules?: any[];
};

export const SwiperView = <T, >({
                                    data,
                                    target,
                                    idx,
                                    renderItem: ItemComponent, // Renamed Com to ItemComponent for clarity
                                    spaceBetween = 16, // Default spaceBetween to 16px
                                    slidesPerView = 'auto',
                                    loop = false,
                                    centeredSlides,
                                    onSlideChange,
                                    className = "",
                                    slideClassName = "",
                                    pagination,
                                    modules = [Pagination], // Default to Pagination module
                                }: SwiperViewProps<T>) => {

    const swiperRef = useRef<SwiperCore>(null);

    useEffect(() => {
        if (!swiperRef.current || !idx) return;

        const targetIndex = data.findIndex((_, index: number) => index === Number(idx));
        if (targetIndex >= 0) {
            swiperRef.current.slideTo(targetIndex);
        }
    }, [target, data]);


    return (
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            pagination={pagination ? {clickable: true} : false}
            onSlideChange={onSlideChange || (() => {
            })}
            loop={loop}
            centeredSlides={centeredSlides}
            className={`w-full h-auto ${className}`}
            modules={modules}
        >
            {data.map((item, index) => (
                <SwiperSlide
                    key={`swiper_slide_${index}`}
                    className={`${data.length > 1 ? slideClassName : '!mx-auto'}`}>
                    <ItemComponent item={item} index={index} target={target}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};