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
              form2: {
                dominio2: "",
                ext2: ""
              },
            statusDominioBuscado:false,
            domainFirstAdd:false,
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

            this.loading = true;

            this.dominiosrecomendados = '';

            this.dominiobuscado = this.form.dominio+'.'+this.form.ext;

            console.log("dominio buscado: "+this.dominiobuscado);

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

                //verificar items en el carro

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito.forEach((element) => {

                this.dominiosrecomendados.forEach((element2) =>{

                    if(element.domain==element2.domain){
                        element2.agregado = true;
                    }

                })

        
            });
    
    
            console.log("dominiosrecomendados");
            console.log(this.dominiosrecomendados);


              
            })
            .catch((error) => {
                 console.log("error", error);

           
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

            this.dominioguardado = this.form2.dominio2+'.'+this.form2.ext2;
            this.dominioguardadostatus = true;

        },

        cambiardominioguardado(){

            this.dominioguardado = '';
            this.dominioguardadostatus = false;
        },

        addFirstDomain(domain){

            let exisd = false;

            let carrito = [];

            let ItemNew = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito.forEach((element) => {

                if(element.domain==domain){
                    exisd = true;
                }

        
            });

            if(!exisd){

                this.dominiosrecomendados.forEach((element2) =>{

                    if(domain==element2.domain){
                        carrito.push(element2);
                        this.domainFirstAdd = true;
                    }

                })
                localStorage.setItem('carrito',JSON.stringify(carrito));

            }

        },

        addcarro(dataitem){

            let carrito = [];
  
            if(localStorage.getItem('carrito')){
  
              carrito =  JSON.parse(localStorage.getItem('carrito'));
  
            }

            console.log("item agregado");
            console.log(dataitem.domain);

            let existed = false;

            carrito.forEach((element) => {

                if(element.domain==dataitem.domain){
                    element.agregado = true;
                    existed = true;
                }

        
            });

            if(!existed){
                dataitem.agregado = true;
                carrito.push(dataitem);
            }
  
            localStorage.setItem('carrito',JSON.stringify(carrito));
           
            console.log(carrito);
  
  
  
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