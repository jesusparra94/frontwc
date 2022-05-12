<script >
import Nav from '@/components/Nav2.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import Planes from '@/components/Planes.vue'
import Footer from '@/components/Footer.vue'

export default {

    components:{Nav, DetallesServicio, Planes,Footer},

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

        this.axios.get(`${this.urlBackend}/api/getproductoscategoriaslug/${this.$route.params.nombre}`).then((response) => {

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