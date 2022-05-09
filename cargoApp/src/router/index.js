import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTable from '/src/views/DataTable.vue'
import Carro from '/src/views/CarroView.vue'
import Operacao from '/src/views/OperacoesView.vue'
import PessoaFisica from '/src/views/PessoaFisica.vue'
import PessoaJuridica from '/src/views/PessoaJuridica.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/carga',
    name: 'carga',
    component: DataTable
  },
  {
    path: '/carro',
    name: 'carro',
    component: Carro
  },
  {
    path: '/operacao',
    name: 'operacao',
    component: Operacao
  },
  {
    path: '/pessoafisica',
    name: 'pessoafisica',
    component: PessoaFisica
  },
  {
    path: '/pessoajuridica',
    name: 'pessoajuridica',
    component: PessoaJuridica
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
