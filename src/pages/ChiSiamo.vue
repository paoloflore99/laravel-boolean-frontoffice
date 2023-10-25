<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
}
</script>
<template>
  <TheHeader></TheHeader>
  <div class="container pt-5">
    <div class="row pt-5 align-item-center">

      <div class="col-12 col-lg-6 pt-5 d-flex align-item-center">
        <img src="src/assets/img/chisiamo.jpg" class="img-fluid max-width-100" alt="immagine del bar">
      </div>

      <div class="col-12 col-md-6 custom-margin-top custom-bg ps-5 pe-5 mt-5">
        <div style="overflow-x:auto; max-height:100%; height:100%;">
          <p class="mt-5 custom-font">Benvenuti da Boolean, il bar che trasforma l'arte dei cocktail in una straordinaria
            esperienza sensoriale. <br>
            La
            nostra storia è nata dall'amore per l'innovazione e la creativita nel mondo dei drink. <br> il nostro
            obiettivo
            e
            offrire ai nostri clienti un viaggio unico tra sapori sorprendenti e una creazione di taleto e passione,
            preparato con ingredienti freschi e techniche avanzate. <br> Siamo qui per stupirvi e creare ricordi
            indimenticabili. <br>
            Unitevi a noi in questa avventura culinaria e scoprite il mondo di Boolean
          </p>
        </div>


      </div>
    </div>

  </div>
  <TheFooter></TheFooter>
</template>
<style>
body {
  background-color: #404040;
  margin: 0;
  padding: 0;
  color: white;
}

.custom-font {
  font-size: 1.5rem;
}

/* .custom-margin-top {
  margin-top: 200px;
} */
.custom-bg {
  background-color: #4C4C4C;
}</style>
