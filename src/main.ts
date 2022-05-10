import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { onMounted, inject } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import useValidate from "@vuelidate/core";
import {
    required,
    email,
    maxLength,
    minLength
} from "@vuelidate/validators";

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

app.use(VueSweetalert2);

app.use(useValidate);

window.Swal =  app.config.globalProperties.$swal;

app.mount('#app')
