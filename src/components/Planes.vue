<script>
import ItemPlanes from "./ItemPlanes.vue";

export default {
  components:{
    ItemPlanes
  },
  data() {
    return {
      urlBackend: this.urlBackend,
    };
  },

  props:['planes']
};
</script>

<template>
  <section class="wrapper bg-light">
    <div class="container pt-13 pb-16 pb-md-18">
      <div class="row">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <h3 class="text-primary mb-3">
            Elige la solución perfecta para ti
          </h3>
          <h3 class="display-5 mb-9">
            ¡Escoge el plan de Hosting ideal para comenzar tu proyecto con nosotros!
          </h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="row gx-md-8 gy-8 mb-2 mb-md-2">
        <div class="col-md-4" v-for="(item, i) in planes" :key="i">
          <ItemPlanes :plan="item">
            <template #nombre>
                
                <p class="text-uppercase"> {{item.nombre}} </p>
                            
                <p v-if="item.categoria_id!==2">{{$filters.currencyUSD(item.precio)}} / al Mes</p>

            </template>

            <template #contenido>
              <p class="text-uppercase">{{item.nombre}}</p>

              <ul>

                  <li v-for="(item1, j) in item.caracteristicas" :key="j"> {{item1.nombre}} {{item1.capacidad}}</li>

              </ul>

              <p v-if="item.categoria_id!==2"> {{ $filters.currencyUSD(item.precio) }} al Mes</p>

              
            </template>
          </ItemPlanes>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </section>
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
