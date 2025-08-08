import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { useRef, useEffect } from 'react'

type ZoomableImageProps = {
    src: string
    alt?: string
}

export const ZoomableImage = ({ src, alt = '' }: ZoomableImageProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const [{ scale, x, y }, api] = useSpring(() => ({
        scale: 1,
        x: 0,
        y: 0,
        config: { tension: 300, friction: 30 },
    }))

    const bind = useGesture(
        {
            onPinch: ({ offset: [s] }) => {
                api.start({ scale: s })
            },
            onDrag: ({ offset: [dx, dy] }) => {
                if (scale.get() > 1) {
                    api.start({ x: dx, y: dy })
                }
            },
        },
        {
            drag: {
                from: () => [x.get(), y.get()],
                filterTaps: true,
            },
            pinch: {
                //@ts-ignore
                from: () => [scale.get()],
                scaleBounds: { min: 1, max: 4 },
                rubberband: true,
            },
        }
    )

    // ✅ scale이 1이 될 때 자동으로 위치를 초기화해서 중앙에 고정
    useEffect(() => {
        let animationFrame: number

        const checkReset = () => {
            const currentScale = scale.get()
            if (currentScale <= 1.001) {
                api.start({ x: 0, y: 0 })
            }
            animationFrame = requestAnimationFrame(checkReset)
        }

        animationFrame = requestAnimationFrame(checkReset)

        return () => cancelAnimationFrame(animationFrame)
    }, [scale, api])

    return (
        <div
            ref={ref}
            {...bind()}
            style={{
                touchAction: 'none',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#D3D3D3',
            }}
        >
            <animated.img
                src={src}
                alt={alt}
                style={{
                    scale,
                    x,
                    y,
                    touchAction: 'none',
                    willChange: 'transform',
                    userSelect: 'none',
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            />
        </div>
    )
}
