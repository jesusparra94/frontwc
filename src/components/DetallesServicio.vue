<script lang="ts">

export default {

  data() {
    return {
      nombreServicio: "",
      planes:'',
      urlBackend: this.urlBackend,
    };
  },

  mounted() {

      this.traerInformacion();
    },
  methods:{
      traerInformacion() {

        this.nombreServicio = this.$route.params.nombre;
         
      }
  }

}

</script>

<template>
    
    <div>
      <section class="wrapper image-wrapper bg-image bg-overlay text-white banner-detalles">
      
        <div class="container pt-16 pt-md-16 pb-10 pb-md-10 text-center">
      
          <div class="row">
      
            <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
      
              <h1 class="display-1 text-white mb-3 ">{{nombreServicio}}</h1>
              <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">We are a creative company that focuses on establishing long-term relationships with customers.</p>
            
            </div>
      
          </div>
      
        </div>
      
      </section>
    </div>

    

</template>

<style>

.banner-detalles{

    background-image: url("../assets/img/photos/bg1.jpg");

}

</style>