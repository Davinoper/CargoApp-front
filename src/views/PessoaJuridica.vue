<template>
    <v-data-table
      :headers="headers"
      :items="pessoas"
      :items-per-page="5"
      class="elevation-1"
      id="data"
    ></v-data-table>

</template>



<script>
import axios from 'axios'

  export default {
    name:'pessoas',
    data () {
      return {
        pessoas:[],
        headers: [
          {
            text: 'Pessoas',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Nome', value: 'nome' },
          { text: 'Email', value: 'email' },
          { text: 'Telefone', value: 'telefone' },
          { text: 'Cnpj', value: 'cnpj' },
          { text: 'Nome fantasia', value: 'nomeFantasia' },
          { text: 'Razão social', value: 'razaoSocial' },
        ],
         
        
      }
      
    },
    created() {
         this.getPessoas();
         console.log("olaa");
        },
        methods: {
            getPessoas(){
                axios.get("http://cargoappi.herokuapp.com/api/pessoa/pessoajuridica").then((res) => {
                    this.pessoas = res.data;
                    console.log(this.pessoas)
                    
                })
                 .catch((error) => {
           console.log(error);
         });
            }
        }
  }
</script>