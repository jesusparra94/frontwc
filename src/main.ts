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

import VueScrollTo from 'vue-scrollto';
import { createMetaManager } from 'vue-meta'



const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)

app.use(VueScrollTo)

app.use(createMetaManager())

app.config.globalProperties.urlBackend = 'http://apiwebcompany.local';

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
