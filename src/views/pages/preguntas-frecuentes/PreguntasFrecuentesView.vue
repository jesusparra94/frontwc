<script lang="ts">
import Nav from '@/components/Nav2.vue'
import Footer from '@/components/Footer.vue'
import VueScrollTo from 'vue-scrollto';

export default {
    components: {
        Nav,
        Footer
      },
    data() {
        return {
            btnCargando:false,
        };
    },

    validations() {
    },

    mounted() {

        
    },


    methods: {

        scrollto(id){

            var element = document.getElementById(id);

            element.scrollIntoView({behavior: "smooth"});
    
        }

    }
};
</script>

<template>
<Nav />


    <section class="wrapper image-wrapper bg-image bg-overlay text-white banner-detalles">
      
        <div class="container pt-16 pt-md-16 pb-10 pb-md-10 text-center">
        
            <div class="row">
        
            <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
        
                <h1 class="display-1 text-white mb-3">Preguntas Frecuentes</h1>
                <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10"></p>
            
            </div>
        
            </div>
        
        </div>
    
    </section>

    <section class="wrapper bg-light mb-5">

        <div class="container">

            <div class="row d-flex justify-content-center">

                <div class="col-md-12 mt-4">

                    <div class="row ">

                        <h2 class="azul-crt text-center">... próximamente</h2>

                        

                    </div>  

                </div>

            </div>

        </div>

    </section>

    <Footer/>

</template>