<script>
export default {
  


}
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-black">
      <div class="container-fluid">
        <!-- Logo qui -->
        <div class="navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active text-white" to="/" aria-current="page">Home</router-link>
            <router-link class="nav-link text-white" to="/about">Chi Siamo</router-link>
            <router-link class="nav-link text-white" to="/contacts">Contatti</router-link>
            
          </div>
        </div>
      </div>
    </nav>
    <div class="yellow-stripe"></div>
  </header>
</template>
<style>
.yellow-stripe{
  height: 5px;
  background-color: #A3A656;
  width: 100%;
}
</style>