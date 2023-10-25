
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
<<<<<<< HEAD
=======



  methods: {
    toggleClick(cocktailId) {
      this.isClicked = cocktailId;
    },
    resetClick() {
      this.isClicked = null;
    }
  }

>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f

};
</script>

<template>
<<<<<<< HEAD
  <div class="container d-flex">
    <div v-for="cocktail in cocktails" :key="cocktail.id" class="card margin-custom me-4 " style="width: 18rem;">
      <img :src="cocktail.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">{{cocktail.nome}}</h5>
        <p class="card-text text-center">{{cocktail.category}}</p>
=======
  <div class="altezza">

    <TheHeader></TheHeader>
  <div class="sfondo " @click="resetClick">
    
      <div class="container">

        <div class="p-4 ">
          <h2>Boolean Cocktail Bar</h2>
        </div>


        <div class="scrollable-container">
          <div class="row  d-flex justify-content-center">
            <div class="info card bg-transparent col-3  d-flex justify-content-center border-0"
              v-for="cocktail in cocktails"
              :key="cocktail.id"
              @click.stop="toggleClick(cocktail.id)"
              :class="{ clicked: isClicked === cocktail.id }">
              <img :src="cocktail.image" class="rounded-2" alt="">
              <div class="card-body descrizione text-white">
                <p class="card-text">{{ cocktail.nome }}</p>
                <p class="card-text">{{ cocktail.category }}</p>
              </div>
            </div>
          </div>
        </div>

>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f
      </div>

      <div>
        <img src="../assets/img/_a52653cc-f68e-443d-b871-85d57e0db9e7.jpg" alt="">
      </div>
    
    <TheFooter></TheFooter>
  </div>
</div>
</template>
<<<<<<< HEAD
<style>
.margin-custom{
  margin-top: 150px;
=======



<style scoped>

.altezza {
  height: 100vh;
  overflow: hidden;
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f
}
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

<<<<<<< HEAD
</style>
=======
.info.clicked {
  transition: 1s;
  width: 400px;
  text-align: center;
}

.logo {
  width: 50px;
  height: 50px;
}

.card {
  width: 270px;
  margin: 10px;
  margin-top: 30px;

}

.scrollable-container {
  /* background-color: rgba(0, 0, 0, 0.3); */
  max-height: 600px;
  overflow-y: auto;
}

.scrollable-container::-webkit-scrollbar {
  width: 2px;
}

/* <img :src="cocktail.image" class="card-img-top" alt="..."> */
</style>
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f
