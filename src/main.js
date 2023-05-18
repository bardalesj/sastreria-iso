import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Contacto from '@/views/Contacto'
import CrearPedido from '@/views/CrearPedido'
import Catalogo from '@/views/Catalogo'
import IniciarSesion from '@/views/IniciarSesion'
import IngresarCuenta from '@/components/login/IngresarCuenta'
import NuevaCuenta from '@/components/login/NuevaCuenta'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
        path: '',
        component: Index,
        name: 'Index'
    },
    {
      path: '/contacto',
      component: Contacto,
      name: 'Contacto'
    },
    {
      path: '/crear-pedido',
      component: CrearPedido,
      name: 'CrearPedido'
    },
    {
      path: '/catalogo',
      component: Catalogo,
      name: 'VerCatalogo'
    },
    {
      path: '/login',
      component: IniciarSesion,
      name: 'IniciarSesion',
      children: [
        {
          path: '',
          component: IngresarCuenta,
          name: 'IngresarCuenta'
        },
        {
          path: 'registro',
          component: NuevaCuenta,
          name: 'NuevaCuenta'
        }
      ]
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
