import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import { createApp } from 'vue';
import App from './App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import routes from './routes';
import Toaster from "@meforma/vue-toaster";

createApp(App).use(routes).use(VueAxios, axios).use(Toaster).mount('#app');

