<script lang="ts">

export default {
    components: {
      },
    data() {
        return {
            mostrarMovil: false,
            totalitems:0
        };
    },

    mounted() {

        if(localStorage.getItem('carrito')){

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            this.totalitems = carrito.length;
        }else{
          this.totalitems = 0;
        }

        
    },


    methods: {

        mostrarNavMovil(){

            if(this.mostrarMovil){

              this.mostrarMovil = false;

            }else{

              this.mostrarMovil = true;

            }

        }
        
    }
};

</script>

<template>
  
    <div>
      <header class="wrapper bg-soft-primary">
        <nav class="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none">
          <div class="container flex-lg-row flex-nowrap align-items-center">
            <div class="navbar-brand w-100">
              <a href="/">
                <img class="logo-dark" src="@/assets/imagenes/logoWeb.png" style="width:280px;" alt="" />
                <img class="logo-light" src="@/assets/imagenes/logoWeb.png" style="width:280px;" alt="" />
              </a>
            </div>
            <div class="navbar-collapse offcanvas-nav" :class="[mostrarMovil ? ['open']:'']">
      
             <div class="offcanvas-header d-lg-none d-xl-none">
                <a href="/"><img src="@/assets/imagenes/logoWeb.png" style="width:320px;" alt="" /></a>
                <button type="button" @click="mostrarNavMovil()" class="btn-close btn-close-white offcanvas-close offcanvas-nav-close" aria-label="Close"></button>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/">Inicio</a>
                  
                </li>
                <li class="nav-item dropdown"><a class="nav-link" href="#" v-scroll-to="'#nuestrosServicios'">Servicios</a>
                  
                </li>
                
                <li class="nav-item dropdown"><a class="nav-link" href="/contacto">Contacto</a>
                  
                </li>
                
              </ul>
      
            </div>
        
            <div class="navbar-other w-100 d-flex ms-auto">
              <ul class="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
      
                <li class="nav-item">
      
                  <a href="/carrito">
                  
                    <span>

                      <i class="fa-solid fa-bag-shopping" style="font-size:36px;color:#FFF"></i>
                      <span class="badge bg-white" style="position:relative;top:-12px;left:-8px;color:black;font-size:10px;border:0.8px solid #005AD2;">{{totalitems}}</span>

                    </span>
      
                  </a>
                 
                </li>
      
                <li class="nav-item">

                  <span>

                    <i class="fa-solid fa-circle-user" style="font-size:36px;color:#FFFF"></i>

                  </span>
      
                </li>

                <li class="nav-item"><a class="nav-link" data-toggle="offcanvas-info"><i class="uil uil-info-circle"></i></a></li>

                <li class="nav-item d-lg-none">
                  <div class="navbar-hamburger">
                    <button class="hamburger animate plain" :class="[mostrarMovil ? ['active']:'']" @click="mostrarNavMovil()" data-toggle="offcanvas-nav"><span></span></button>
                  </div>
                </li>
      
              </ul>
            </div>

          </div>

        </nav>

      </header>
    </div>

</template>