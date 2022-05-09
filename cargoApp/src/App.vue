<template>
  <div>
    <Principal/>
  </div>

</template>

<style scoped>
.footer {
  position: fixed;
  margin: 0;
  padding: 0;
  border: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #e11b22;
  color: white;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 9px;
}
.text-footer {
  padding: 12px;
}
</style>





<script>
import Principal from './components/Principal.vue'

export default {

  components:{
    Principal,
  }
}
</script>



