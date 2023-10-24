<<<<<<< HEAD
<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    components: {
    TheHeader,
    TheFooter
  },
=======

<script>
export default {
>>>>>>> 60bfb7c91d968cc9fc0796da0d942e8609ff4fda

}
</script>
<template>
<<<<<<< HEAD
     <TheHeader></TheHeader>
    <div class="container ">
      <!-- descrizione pagina -->
<div class="row justify-content-center pt-5">
      <div class="col-4">
        <h1 class="text-center mt-5 mb-5">Reservation</h1>
      <p class="text-center mt-5 mb-5 custom-font">Siamo sempre pronti a rispondere alle vostre domande e accogliere le vostre prenotazione. Non esitate a
        contattarci.
      </p>
      </div>
 
</div>
      

      <!-- form prenotazione -->

      <form action="" class="d-flex align-items-center justify-content-center pt-3">
        <div class="form-group custom-form row">
=======
    <div class="container ">
      <!-- descrizione pagina -->
      <h1 class="text-center mt-5 mb-5">Reservation</h1>
      <p class="text-center mt-5 mb-5 custom-font">Siamo sempre pronti a rispondere alle vostre domande e accogliere le vostre prenotazione. Non esitate a
        contattarci.
      </p>

      <!-- form prenotazione -->

      <form action="">
        <div class="form-group custom-form text-center row">
>>>>>>> 60bfb7c91d968cc9fc0796da0d942e8609ff4fda
          <div class="col-sm-3">
            <input type="number" class="form-control" placeholder="Numero di persone" v-model="numberOfPeople" />
          </div>
          <div class="col-sm-3">
            <input type="date" class="form-control" v-model="reservationDate" />
          </div>
          <div class="col-sm-3">
            <input type="time" class="form-control" v-model="reservationTime" />
          </div>

          <div class="col-sm-3">
            <button class="btn custom-btn" @click="bookTable">Book a Table</button>
          </div>
        </div>
<<<<<<< HEAD
      </form>


    </div>
    <TheFooter></TheFooter>
=======

      </form>

      <!-- informazione contatti -->

      <div class="contact-info d-flex justify-content-between">
        <p><strong>Indirizzo:</strong> Via del Cocktail, 20</p>
        <p><strong>Telefono:</strong> 0039 3452489551</p>
        <p><strong>Email:</strong> info@booleancocktailbar.com</p>
        <p><strong>Orari di Apertura:</strong> Lun - Ven 18:00 - 02:00, Sab - Dom 16:00 - 02:00</p>
      </div>


    </div>

>>>>>>> 60bfb7c91d968cc9fc0796da0d942e8609ff4fda
</template>
<style>
body{
  background-color: #404040;
  margin: 0;
  padding: 0;
  color: white;
}

.custom-font{
  font-size: 20px;
}

.custom-btn{
  background-color: #DEE756;
}

.custom-form{
<<<<<<< HEAD
  align-items: center;
}

</style>
=======
  margin-top: 200px;
  margin-bottom: 300px;
}

</style>
>>>>>>> 60bfb7c91d968cc9fc0796da0d942e8609ff4fda
