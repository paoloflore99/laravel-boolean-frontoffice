<script>
import axios from "axios";
export default {
  data() {
    return {
      cocktails: []
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/cocktails/").then((response)=>{
      this.cocktails=response.data;
    })
  },

};
</script>
<template>
  <div class="container d-flex">
    <div v-for="cocktail in cocktails" :key="cocktail.id" class="card margin-custom me-4 " style="width: 18rem;">
      <img :src="cocktail.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">{{cocktail.nome}}</h5>
        <p class="card-text text-center">{{cocktail.category}}</p>
      </div>
    </div>
  </div>
</template>
<style>
.margin-custom{
  margin-top: 150px;
}
.img-size{
  width: 18px;
  height: 60%;
}

</style>