<script>
export default {



}
</script>
<template>
  <header>
    
    <nav class="navbar navbar-expand-lg bg-black justify-content-center">

      <div class="container-fluid">
        <img class="ms-5 me-5" src="src/assets/img/logo-boolean.png" style="width: 120px;" alt="">
        <div class="navbar-collapse" id="navbarNavAltMarkup">

          <div class="navbar-nav ">
            <router-link class="nav-link active text-white me-5" to="/" aria-current="page">Home</router-link>
            <router-link class="nav-link text-white me-5" to="/cocktails">I Nostri Drinks</router-link>
            <router-link class="nav-link text-white me-5" to="/about">Chi Siamo</router-link>
            <router-link class="nav-link text-white me-5" to="/contacts">Contatti</router-link>
          </div>
        </div>
      </div>

    </nav>
    <div class="yellow-stripe"></div>
  </header>
</template>
<style>
.yellow-stripe {
  height: 5px;
  background-color: #A3A656;
  width: 100%;
}
</style>