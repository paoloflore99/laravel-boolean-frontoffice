<script>
export default {
  methods: {
    redirectToCocktails() {
      this.$router.push({ name: 'cocktails' }) 
    }
  }
}
</script>

<template>
    <main>
        <div>
            <div class="bg-container-fluid">
                <div class="row">
                    <div class="col-10 d-flex justify-content-end align-items-center">
                        <div class="text-container p-4 text-white text-center">
                            <h1>Boolean Cocktail Bar</h1>
                            <br>
                            <p>Benvenuti a boolean, il cocktail bar che unisce
                                <br>l'arte dei cocktail alla logica booleana.<br>
                                Scoprite nuovi sapori e contattateci per informazioni.
                            </p>
                            <div>
                                <button class="btn btn-primary m-3" @click="redirectToCocktails">I NOSTRI COCKTAIL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
main {
    background-image: url(../assets/img/Background.jpg);
    background-size: cover;
    background-position-x: right;
    height: 100vh;
}

</style>