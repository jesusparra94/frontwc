import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/HomeView.vue'
import ServiciosView from '../views/pages/servicios/ServiciosView.vue'
import CarritoView from '../views/pages/carrito/CarritoView.vue'
import ContactoView from '../views/pages/contacto/ContactoView.vue'
import PagoExitosoView from '../views/pages/pagos/PagoExitoso.vue'
import PagoRechazadoView from '../views/pages/pagos/PagoRechazado.vue'
import CuentaView from '../views/pages/cuenta/CuentaView.vue'
import FacturasPendientes from '../views/pages/cuenta/FacturasPendientes.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicio/:nombre',
      name: 'servicio',
      component: ServiciosView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CarritoView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/pago-exitoso/:code',
      name: 'pago-exitoso',
      component: PagoExitosoView
    },
    {
      path: '/pago-rechazado/:code',
      name: 'pago-rechazado',
      component: PagoRechazadoView
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: CuentaView
    },
    {
      path: '/cuenta/factura-pendiente',
      name: 'cuenta-factura-pendiente',
      component: FacturasPendientes
    },
  ],
  scrollBehavior(to, from, savedPosition) {

    if(document.getElementById('body-carrito')){

      return {
        el: document.getElementById('body-carrito'),
        top: 0,
        behavior: 'smooth',
      }

    }else if(document.getElementById('body-planes')){

      return {
        el: document.getElementById('body-planes'),
        top: 0,
        behavior: 'smooth',
      }

    }else if(document.getElementById('nuestrosServicios')){

      return {
        el: document.getElementById('nuestrosServicios'),
        top: 0,
        behavior: 'smooth',
      }

    }else{

      return {
        // el: document.getElementById('nuestrosServicios'),
        top: 0,
        behavior: 'smooth',
      }

    }

  }
})

export default router
