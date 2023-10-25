<script>
export default {

}

</script>
<template>
  <footer class="footer-hover d-none d-md-block">
    <div class="yellow-stripe"></div>
    <div class="col-12 contact-info d-flex justify-content-around mt-3">
        <p><strong>Indirizzo:</strong> Via del Cocktail, 20</p>
        <p><strong>Telefono:</strong> 0039 3452489551</p>
        <p><strong>Email:</strong> info@booleancocktailbar.com</p>
        <p><strong>Orari di Apertura:</strong> Lun - Ven 18:00 - 02:00, Sab - Dom 16:00 - 02:00</p>
      </div>
  </footer>

</template>
<style>

.footer-hover {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: black; 
  opacity: .5;
  transition: opacity 0.5s ease;
}

.footer-hover:hover {
  opacity: 1;
}
.slogan{
  text-align: center;

}

.yellow-stripe{
  height: 5px;
  background-color: #A3A656;
  width: 100%;
}

p {
  font-size: .7rem;
}
</style>
