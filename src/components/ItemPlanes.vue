<script lang="ts">
export default {
  
  data(){
    return {
    }
  },
  props: ['plan'],

  methods:{
      addcarro(item){

          let carrito = [];

          if(localStorage.getItem('carrito')){

            carrito =  JSON.parse(localStorage.getItem('carrito'));

          }


         carrito.push(item);

         localStorage.setItem('carrito',JSON.stringify(carrito));

         this.$router.push('/carrito')


      }
  }
}
</script>

<template>
    <div class="card mx-0" >

        <div class="front" >
          
            <p><slot name="nombre"></slot></p>
        
        </div>
        
        <div class="back">
            <div>
                <slot name="contenido">

                </slot>

                <button class="button" @click="addcarro(plan)" >Comprar</button>
            </div>
        </div>

    </div>

    <div class="row">

      <div class="col-md-12 text-center">

        <button class="btn btn-outline-primary rounded-pill" @click="addcarro(plan)">Comprar</button>

      </div>

    </div>



<div
  class="modal fade"
  id="modalInfoContratacion"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="modalInfoContratacion"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg">



    <div class="modal-content" >

      <div class="modal-header">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>

      <div class="modal-body">

        <div class="row resultados">

          <div class="col-md-12">

            <h3>
              Descuento por el primer periodo de contratación
            </h3>
            <br>

            <p>Los descuentos ofrecidos se aplican <b>solo en el primer periodo de pago</b>, 
               y están disponibles en los periodos indicados en cada plan.</p>
            
            <p>Estos descuentos no estan incluidos en la renovación del plan y son válidos para <b>nuevos clientes</b>
             y clientes actuales que quieran contratar un <b>nuevo de hosting</b>.</p>

             <p>Los precios mostrados en cada plan <b>no incluyen el IVA</b>.</p>
            
            
          </div>

        </div>

      </div>



    </div>
  </div>
</div>


</template>

<style scoped>
.card {
  color: inherit;
  cursor: pointer;
  /*
  width: calc(33% - 2rem);
  min-width: calc(33% - 2rem);*/
  height: 400px;
  min-height: 400px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}
@media screen and (max-width: 800px) {
  .card {
    width: calc(50% - 2rem);
  }
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/imagenes/hosting.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  opacity: 0.25;
  z-index: -1;
}
.card:hover .front {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.back .button {
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
}
.back .button:before {
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even) .back .button {
  background: linear-gradient(135deg, #e61a80, #e61a3c);
}
.card:nth-child(even) .back .button:before {
  box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
  background-color: rgba(230, 26, 60, 0.25);
}
.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 100px;
  font: inherit;
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:before {
  transition: 300ms ease;
  position: absolute;
  display: block;
  content: "";
  transform: translateZ(-40px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 100px;
  left: 10px;
  top: 16px;
}
.button:hover {
  transform: translateZ(55px);
}
.button:hover:before {
  transform: translateZ(-55px);
}
.button:active {
  transform: translateZ(20px);
}
.button:active:before {
  transform: translateZ(-20px);
  top: 12px;
}
</style>