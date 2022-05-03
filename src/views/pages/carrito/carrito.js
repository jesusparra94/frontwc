import Nav from '@/components/Nav.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import ModalDominios from '@/components/dominios/ModalDominios.vue';
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Nav,
        DetallesServicio,
        ModalDominios,
        Footer
      },
    data() {
        return {
            carrito:true,
            identificacion:false,
            pago:false,
            confirmacion:false,
            isActive: true,
            jsoncarro:'',
            urlBackend: this.urlBackend,
            form: {
                dominio: "",
                ext: ""
              },
            statusDominioBuscado:false,
            dominiobuscado:'',
            dominioguardado:'',
            dominioguardadostatus:false,
            dominiosrecomendados:'',
            loading:false,
            domainOld:false,
            domainNew:true
        };
    },
    mounted() {
        this.statusDominioBuscado = false;

        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));

        }

        console.log(this.jsoncarro);
        
    },


    methods: {

        buscardominio(){

            console.log(this.form.dominio);

            this.loading = true;

            this.dominiosrecomendados = '';

            this.dominiobuscado = this.form.dominio+'.'+this.form.ext;

            const array1 = ['a', 'b', 'c'];

            this.axios
            .post(`${this.urlBackend}/api/getdominio`, this.form)
            .then((res) => {

                this.dominiosrecomendados = res.data.data.results;

                res.data.data.results.forEach((element) => {

                    console.log("dominio: "+element.domain+" ,estatus: "+element.status);
            
                    if(element.domain==this.dominiobuscado){

                        
            
                        if(element.status=='free'){
            
                            this.statusDominioBuscado = true;
            
                        }else{
            
                            this.statusDominioBuscado = false;
            
                        }

                        console.log("Status de dominio buscado: "+this.statusDominioBuscado);
                        
                    }
            
                    this.dominiosrecomendados.forEach((element2) => {
            
                       if(element.domain===element2.dominio){
            
                         element.agregado = true;
            
                       }else{
                        element.agregado = false;
                       }
            
                     });
            
                });

                console.log(this.dominiosrecomendados);


                // if (res.data) {
                // if (this.form.id_producto == "") {
                //     Swal.fire({
                //     icon: "success",
                //     title: "Producto",
                //     text: "Producto creada exitosamente.",
                //     timer: 1500,
                //     showConfirmButton: false,
                //     });
                // } else {
                //     Swal.fire({
                //     icon: "success",
                //     title: "Producto",
                //     text: "Producto editada exitosamente.",
                //     timer: 1500,
                //     showConfirmButton: false,
                //     });
                // }
                // this.modal = false;
                // this.productoexist = false;
                // this.btnCreate = false;

                // this.$v.form.$reset();
                // this.formcaracteristicas = [];
                // this.traerProducto();
                // }
            })
            .catch((error) => {
                 console.log("error", error);

            //     let title = "";
            //     let message = "";
            //     let type = "";

            //     if (this.form.id_producto == "") {
            //     title = "Crear Producto";
            //     message = "Producto  creada con exito";
            //     type = "error";
            //     } else {
            //     title = "Editar Producto";
            //     message = "Producto editada con exito";
            //     type = "error";
            //     }

            //     this.modal = false;
            //     this.btnCreate = false;
            //     this.$v.form.$reset();

            //     this.successmsg(title, message, type);
             });


        },

        changeOption(){

            if(this.domainOld==true){
                this.domainNew = true;
                this.domainOld = false;
            }else{
                this.domainOld = true;
                this.domainNew = false;
            }

        },

        guardardominio(){

            this.dominioguardado = this.form.dominio2+'.'+this.form.ext2;
            this.dominioguardadostatus = true;

        },

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