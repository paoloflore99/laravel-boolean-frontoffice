
<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

import axios from "axios";
export default {
  components: {
    TheHeader,
    TheFooter
  }, 
  data() {
    return {
      isClicked: null,
      cocktails: []
    };
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/cocktails/").then((response) => {
      this.cocktails = response.data;
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
.sfondo {
  background-image: url(../assets/img/Background.jpg);
  height: 80vh;
  background-size:cover;
  background-position-x: left bottom;
  background-position-y: bottom;
  background-repeat: no-repeat;

}
.descrizione {
  transition: 1s;
}
.info {
  transition: 1s;
}

</style>
