import {useEffect, useRef, useState} from "react";

export const TextArea = (props:any) => {


    const [lineCount, setLineCount] = useState<number>(1);
    const textareaRef = useRef<any>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;

            // 줄 수 계산
            const computedStyle = window.getComputedStyle(textarea);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const currentLineCount = Math.round(textarea.scrollHeight / lineHeight);
            setLineCount(currentLineCount);
        }
    }, [props.value]);
    return (
        <textarea
            ref={textareaRef}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            style={{
                width: '100%',
                resize: 'none', // 사용자가 수동 조절 못 하게
                overflow: 'hidden', // 스크롤 숨기기
            }}
            rows={1} // 최소 행 수
            className={`px-[12px] py-[15px]  ${lineCount > 2 ? 'rounded-3xl' : 'rounded-full'} bg-[var(--lightGrayBg)] text-[14px] border-none  w-full`}
            placeholder="내용을 입력하세요..."
        />
    )
}