<template>

<div class="hero-slider-wrapper bg-dark">

    <div class="hero-slider owl-carousel dots-over" data-nav="true" data-dots="true" data-autoplay="true">

      <div class="owl-slide d-flex align-items-center bg-overlay bg-overlay-400 slider1">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start">

              
              <h3 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">Aloja tu sitio web con nosotros</h3>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">Somos profesionales comprometidos con ofrecerte el mejor servicio.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Ver Planes</a></div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.container -->
      </div>
      
      <div class="owl-slide d-flex align-items-center bg-overlay bg-overlay-400 slider2">
        <div class="container">
          <div class="row">
            <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">

              
              <h3 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">¿Necesitas un Sitio Web?</h3>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">Te ofrecemos servicios de desarrollo web desde cero, así como actualización para tu sitio web actual.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Ver Planes</a></div>
            </div>
          </div>
          <!--/.row -->
        </div>
        <!--/.container -->
      </div>
      
      <div class="owl-slide d-flex align-items-center bg-overlay bg-overlay-400 slider3" >
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start">

              
              <h3 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">Dominios (.cl, .com, .org, etc)</h3>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">Compra tu dominio con nosotros para que tus clientes puedan ubicarte en la internet.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Comprar Dominio</a></div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/.container -->
      </div>
     
    </div>
  
  </div>

</template>

<script lang="ts">

export default {

  mounted() {

      this.cargarCarouselOwl();
    },
  methods:{

      cargarCarouselOwl(){
          
        $('.owl-carousel').owlCarousel({
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                }
            }
        })

      }

  }

}

</script>

<style>

.slider1{
background-image: url("../assets/imagenes/slider01.jpg");
}
.slider2{
background-image: url("../assets/imagenes/slider02.jpg");
}
.slider3{
background-image: url("../assets/imagenes/slider03.jpg");
}


</style>