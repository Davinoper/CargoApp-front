<template>
    <v-data-table
      :headers="headers"
      :items="cargas"
      :items-per-page="5"
      class="elevation-1"
      id="data"
    ></v-data-table>

</template>



<script>
import axios from 'axios'

  export default {
    name:'DataTable',
    data () {
      return {
        cargas:[],
        headers: [
          {
            text: 'Cargas',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Id', value: 'id' },
          { text: 'Altura (m)', value: 'altura' },
          { text: 'Largura (m)', value: 'largura' },
          { text: 'Comprimento (m)', value: 'comprimento' },
          { text: 'Peso (kg)', value: 'peso' },
          { text: 'Inventario', value: 'inventario' },
          { text: 'Tipo Carga', value: 'tipoCarga' },
        ],
         
        
      }
      
    },
    created() {
         this.getCargas();
         console.log("olaa");
        },
        methods: {
            getCargas(){
                axios.get("http://cargoappi.herokuapp.com/api/carga").then((res) => {
                    this.cargas = res.data.map((c) => {
                      c.inventario = true ? "Em estoque" : "Fora estoque";
                      return c
                    });
                    console.log(this.cargas)
                    
                })
                 .catch((error) => {
           console.log(error);
         });
            }
        }
  }
</script>