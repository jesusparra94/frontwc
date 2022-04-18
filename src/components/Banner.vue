<template>

<div class="hero-slider-wrapper bg-dark">

    <div class="hero-slider owl-carousel dots-over" data-nav="true" data-dots="true" data-autoplay="true">

      <div class="owl-slide d-flex align-items-center bg-overlay bg-overlay-400 slider1">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start">

              
              <h2 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">We bring solutions to make life easier.</h2>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">We are a creative company that focuses on long term relationships with customers.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Read More</a></div>
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

              
              <h2 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">We are trusted by over a million customers.</h2>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">Here a few reasons why our customers choose us.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="./assets/media/movie.mp4" class="btn btn-circle btn-white btn-play ripple mx-auto mb-5" data-glightbox><i class="icn-caret-right"></i></a></div>
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

              
              <h2 class="display-1 fs-56 mb-4 text-white animated-caption" data-anim="animate__slideInDown" data-anim-delay="500">Just sit and relax.</h2>
              <p class="lead fs-23 lh-sm mb-7 text-white animated-caption" data-anim="animate__slideInRight" data-anim-delay="1000">We make sure your spending is stress free so that you can have the perfect control.</p>
              <div class="animated-caption" data-anim="animate__slideInUp" data-anim-delay="1500"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Contact Us</a></div>
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
            loop:false,
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
background-image: url("../assets/img/photos/bg7.jpg");
}
.slider2{
background-image: url("../assets/img/photos/bg8.jpg");
}
.slider3{
background-image: url("../assets/img/photos/b9.jpg");
}


</style>