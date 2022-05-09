<template>
    <v-data-table
      :headers="headers"
      :items="operacoes"
      :items-per-page="5"
      class="elevation-1"
      id="data"
    ></v-data-table>

</template>



<script>
import axios from 'axios'

  export default {
    name:'operacoes',
    data () {
      return {
        operacoes:[],
        headers: [
          {
            text: 'Operações',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Tipo Operacão', value: 'tipoOperacao' },
          { text: 'Horário', value: 'horario' },
          { text: 'Remetente', value: 'remetente.nome' },
          { text: 'Destinatário', value: 'destinatario.nome' },
          { text: 'Carga', value: 'carga.id' },
          { text: 'Carro', value: 'carro.modelo' },
        ],
         
        
      }
      
    },
    created() {
         this.getOperacoes();
         console.log("olaa");
        },
        methods: {
            getOperacoes(){
                axios.get("http://cargoappi.herokuapp.com/api/operacao").then((res) => {
                    this.operacoes = res.data;
                    console.log(this.operacoes)
                    
                })
                 .catch((error) => {
           console.log(error);
         });
            }
        }
  }
</script>