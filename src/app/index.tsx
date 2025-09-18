import 'shared/style/base.css'
import 'shared/style/commons.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {Router} from "pages/Router"
import {store} from './store'

if (import.meta.env.MODE !== "dev")
    if (window.location.protocol === 'http:') {
        window.location.href = window.location.href.replace("http", "https");
    }

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Router/>
    </Provider>
)
