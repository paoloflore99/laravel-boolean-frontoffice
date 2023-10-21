<script>
export default {
  name: 'CoctailList',
  data() {
    return {
      coctails: [], //recuperiamo i dati dei coctails dall'API
    }
  }

}
</script>
<template>
  <div class="container">

    <div v-for="cocktail in coctails" :key="cocktail.id" class="card" style="width: 18rem;">
      <img src="cocktail.image" class="card-img-top" alt="cocktail">
      <div class="card-body">
        <h5 class="card-title">{{ cocktail.name }}</h5>
        <p class="card-text">{{ cocktail.description }}</p>

      </div>
    </div>

  </div>
</template>
<style></style>