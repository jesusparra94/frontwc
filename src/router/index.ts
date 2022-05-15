import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/HomeView.vue'
import ServiciosView from '../views/pages/servicios/ServiciosView.vue'
import CarritoView from '../views/pages/carrito/CarritoView.vue'
import ContactoView from '../views/pages/contacto/ContactoView.vue'
import PagoExitosoView from '../views/pages/pagos/PagoExitoso.vue'
import PagoRechazadoView from '../views/pages/pagos/PagoRechazado.vue'


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
  ]
})

export default router
