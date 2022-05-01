import Nav from '@/components/Nav.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Nav,
        DetallesServicio,
        Footer
      },
    data() {
        return {
            carrito:true,
            identificacion:false,
            pago:false,
            confirmacion:false,
            isActive: true,
            jsoncarro:''
        };
    },
    mounted() {


        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));

        }
        
    },


    methods: {

        continuaridentificacion(){
            this.carrito = false;
            this.identificacion = true;
        },
        continuarpago(){
            this.identificacion = false;
            this.pago = true;
        },
        continuarconfirmacion(){
            this.pago = false;
            this.confirmacion = true;
        }

    }
};