export const TIME_TABLE = (lang: string,device:string) => Array.from({length: 5}, (_, i) => ({
    src: `/assets/images/home/${lang}/${device}/timetable${i}.png`
}));