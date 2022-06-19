<script>
export default {
  
  data(){
    return {
    }
  },
  props: ['categoria']
}
</script>

<template>
    <a class="card mx-0" :href="'servicio/'+categoria.slug" v-if="!categoria.cotizable">

        <div 
              :class="[categoria.id_categoria==1 ? 'front':'front2']"
        >
          
            <p><slot name="nombre"></slot></p>
        
        </div>
        
        <div class="back">
            <div>
                <slot name="contenido">

                </slot>

                <a 
                  class="button" 
                  :href="'servicio/'+categoria.slug"
                  v-if="categoria.id_categoria==2"
                >
                  Buscar Dominio
                </a>

                <a 
                  class="button" 
                  :href="'servicio/'+categoria.slug"
                  v-else
                >
                  
                  Ver Planes
                </a>

            </div>
        </div>

    </a>

    <a class="card mx-0" :href="'https://wa.me/5636298783/?text=/'+categoria.nombre" v-else>

        <div 
              :class="[categoria.id_categoria==3 ? 'front3':'']"
        >
            <p><slot name="nombre"></slot></p>
        
        </div>
        
        <div class="back">
            <div>
                <slot name="contenido">

                </slot>

                <a class="button" :href="'servicio/'+categoria.slug" >Cotizar Desarrollo</a>
            </div>
        </div>

    </a>

    

    <div class="row" v-if="!categoria.cotizable">

      <div class="col-md-12 text-center">

        <a class="btn btn-outline-primary rounded-pill" :href="'servicio/'+categoria.slug" v-if="categoria.id_categoria==2">Buscar Dominio</a>

        <a class="btn btn-outline-primary rounded-pill" :href="'servicio/'+categoria.slug" v-else>Ver Planes</a>

      </div>

    </div>

    <div class="row" v-else>

      <div class="col-md-12 text-center">

        <a class="btn btn-outline-primary rounded-pill" :href="'https://wa.me/5636298783/?text=/'+categoria.nombre">Cotizar Desarrollo</a>

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
  background-image: url("../assets/imagenes/hosting.png");
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
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




.front2,
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

.front2 {
  background-image: url("../assets/imagenes/dominios.jpg");
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
}
.front2:before {
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
.card:hover .front2 {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front2 {
  transform: rotateY(-180deg);
}


.front3,
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

.front3 {
  background-image: url("../assets/imagenes/desarrollo-web.jpg");
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
}
.front3:before {
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
.card:hover .front3 {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front3 {
  transform: rotateY(-180deg);
}


.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.back .button {
  background: linear-gradient(135deg, #7B47CF, #17A4F3);
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
  font-size: 22px;
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