<template>
    <v-data-table
      :headers="headers"
      :items="carros"
      :items-per-page="5"
      class="elevation-1"
      id="data"
    ></v-data-table>

</template>



<script>
import axios from 'axios'

  export default {
    name:'Carro',
    data () {
      return {
        carros:[],
        headers: [
          {
            text: 'Carros',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Id', value: 'id' },
          { text: 'Modelo', value: 'modelo' },
          { text: 'Marca', value: 'marca' },
          { text: 'Ano', value: 'ano' },
          { text: 'Altura Baú (m)', value: 'alturaBau' },
          { text: 'Largura Baú (m)', value: 'larguraBau' },
          { text: 'Comprimento Baú (m)', value: 'comprimentoBau' },
          { text: 'Peso máximo (kg)', value: 'pesoMaxBau' },
          { text: 'Status', value: 'statusVeiculo' },
        ],
         
        
      }
      
    },
    created() {
         this.getCarros();
         console.log("olaa");
        },
        methods: {
            getCarros(){
                axios.get("http://cargoappi.herokuapp.com/api/carro").then((res) => {
                    this.carros = res.data
                    
                    console.log(this.carros)
                    
                })
                 .catch((error) => {
           console.log(error);
         });
            }
        }
  }
</script>