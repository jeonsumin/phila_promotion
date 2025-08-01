import {default as kor} from 'shared/config/lang/kor.json';
import {default as eng} from 'shared/config/lang/eng.json';

export const translations: any = {
    KR: kor,
    EN: eng,
}

export const getInitialLang = (): 'KR' | 'EN' => {
    const saved = localStorage.getItem('lang');
    if (saved === 'KR' || saved === 'EN') return saved;
    return 'KR'; // 기본값

};

