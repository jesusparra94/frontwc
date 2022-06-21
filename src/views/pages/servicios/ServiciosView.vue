<script >
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
    <DetallesServicio />
    <Planes :planes="planes" /> 
    <Footer />
</template>