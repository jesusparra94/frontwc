<script lang="ts">
import Nav from '@/components/Nav2.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import Planes from '@/components/Planes.vue'
import Footer from '@/components/Footer.vue'
import { useMeta } from 'vue-meta'
import { useRoute } from 'vue-router'

export default {

    components:{Nav, DetallesServicio, Planes,Footer},

  data() {
    return {
      nombreServicio: "",
      planes:'',
      urlBackend: this.urlBackend,
      isLoading: true
    };
  },

  setup () {

    useMeta({
      title: `Servicio de ${useRoute().params.nombre}`,
      description:'Descripción de los productos',
      htmlAttrs: { lang: 'es', amp: true }
    })
  },

  mounted() {

      this.traerInformacion();
    },

   created() {
    this.axios.interceptors.request.use(
      (config) => {
        this.isLoading = true;
        return config;
      },
      (error) => {
        this.isLoading = false;
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        this.isLoading = false;
        return response;
      },
      (error) => {
        this.isLoading = false;
        return Promise.reject(error);
      }
    );
  },

  methods:{
      traerInformacion() {

        this.nombreServicio = this.$route.params.nombre;

        this.axios.get(`${this.urlBackend}/api/getproductoscategoriaslug/${this.$route.params.nombre}`).then((response) => {

          console.log("Planes");

          console.log(response);

          this.planes = response.data;
          
        });

         
      }
  }

}

</script>

<template>
    <Nav />
    <!-- <DetallesServicio /> -->
    <Planes :planes="planes" :isLoading="isLoading" /> 
    <Footer />
</template>