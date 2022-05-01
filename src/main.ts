import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)

app.config.globalProperties.urlBackend = 'http://127.0.0.1:8000';

app.config.globalProperties.$filters = {
    currencyUSD(value) {
        if (typeof value !== "number") {
            return value;
        }
        var formatter = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        });
        return formatter.format(value);
    }
  }

app.mount('#app')
