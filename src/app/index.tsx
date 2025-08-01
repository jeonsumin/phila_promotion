import 'shared/style/base.css'
import 'shared/style/commons.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {Router} from "pages/Router"
import {store} from './store'

//TODO: 다국어 설정하기

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </StrictMode>,
)
