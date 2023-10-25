
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



  methods: {
    toggleClick(cocktailId) {
      this.isClicked = cocktailId;
    },
    resetClick() {
      this.isClicked = null;
    }
  }


};
</script>

<template>
  <div class="altezza">

    <TheHeader></TheHeader>
  <div class="bg-cocktail " @click="resetClick">
    
      <div class="container">
        <h2 class="ps-5 ms-5 pt-4">Boolean Cocktail Bar</h2>
        <div class="scrollable-container">
          <div class="row  d-flex justify-content-center">
            <div class="info card bg-transparent col-3  d-flex justify-content-center border-0"
              v-for="cocktail in cocktails"
              :key="cocktail.id"
              @click.stop="toggleClick(cocktail.id)"
              :class="{ clicked: isClicked === cocktail.id }">
              <img :src="cocktail.image" class="rounded-2" alt="">
              <div class="card-body descrizione text-white">
                <p class="card-text name-text">{{ cocktail.nome }}</p>
                <p class="card-text">{{ cocktail.category }}</p>
                <p class="card-text">{{ cocktail.ingredients }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div>
        <img src="../assets/img/_a52653cc-f68e-443d-b871-85d57e0db9e7.jpg" alt="">
      </div>
    
    <TheFooter></TheFooter>
  </div>
</div>
</template>



<style scoped>

.name-text {
  font-size: 1.5rem;
}

.altezza {
  height: 100vh;
  overflow: hidden;
}
.bg-cocktail {
  background-image: url(../assets/img/home-page-cocktailbar.jpg);
  background-size: cover;
  background-position-x: left bottom;
  background-position-y: bottom;
  background-repeat: no-repeat;
  height: 80vh;
}

.descrizione {
  transition: 1s;
}
.info {
  transition: 1s;
}

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
  background-color: rgba(0, 0, 0, 0.5);
  max-height: 600px;
  overflow-y: auto;
}

.scrollable-container::-webkit-scrollbar {
  width: 2px;
}

/* <img :src="cocktail.image" class="card-img-top" alt="..."> */
</style>