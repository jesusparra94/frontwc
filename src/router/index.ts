import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/HomeView.vue'
import ServiciosView from '../views/pages/servicios/ServiciosView.vue'
import CarritoView from '../views/pages/carrito/CarritoView.vue'
import ContactoView from '../views/pages/contacto/ContactoView.vue'
import PagoExitosoView from '../views/pages/pagos/PagoExitoso.vue'
import PagoRechazadoView from '../views/pages/pagos/PagoRechazado.vue'
import CuentaView from '../views/pages/cuenta/CuentaView.vue'
import FacturasPendientes from '../views/pages/cuenta/FacturasPendientes.vue'
import LoginView from '../views/pages/login/LoginView.vue'

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
      component: CuentaView,
      meta: { requiresAuth: true }
    },
    {
      path: '/cuenta/factura-pendiente',
      name: 'cuenta-factura-pendiente',
      component: FacturasPendientes,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
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

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
