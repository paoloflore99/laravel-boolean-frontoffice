<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    components: {
<<<<<<< HEAD
    TheHeader,
    TheFooter
  },
=======
        TheHeader,
        TheFooter
    },
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f

}
</script>
<template>
<<<<<<< HEAD
     <TheHeader></TheHeader>
=======
    <TheHeader></TheHeader>
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f
    <div class="container ">
        <!-- descrizione pagina -->
        <div class="row justify-content-center pt-5">
            <div class="col-4">
                <h1 class="text-center mt-5 mb-5">Reservation</h1>
                <p class="text-center mt-5 mb-5 custom-font">Siamo sempre pronti a rispondere alle vostre domande e
                    accogliere le vostre prenotazione. Non esitate a
                    contattarci.
                </p>
            </div>

<<<<<<< HEAD
      <!-- form prenotazione -->

      <form action="" class="d-flex align-items-center justify-content-center pt-3">
        <div class="form-group custom-form row">
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
      </form>
=======
        </div>


        <!-- form prenotazione -->

        <form action="" class="d-flex align-items-center justify-content-center pt-3">
            <div class="form-group custom-form row">
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
        </form>
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f


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
    font-size: 20px;
}

.custom-btn {
    background-color: #DEE756;
}

<<<<<<< HEAD
.custom-form{
  align-items: center;
=======
.custom-form {
    align-items: center;
>>>>>>> 7c869a6b7f1c2d49b2ad07c6948ae505e2d7bb9f
}
</style>
