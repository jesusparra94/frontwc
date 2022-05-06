import Nav from '@/components/Nav.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import ModalDominios from '@/components/dominios/ModalDominios.vue'
import Footer from '@/components/Footer.vue'
import Swal from "sweetalert2"

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
            periodosdominios:'',
            urlBackend: this.urlBackend,
            formvalores: [],
            formvalores2: [],
            dominiosbuscados: [],
            form: {
                dominio: "",
                ext: ""
              },
              form2: {
                dominio2: "",
                ext2: ""
              },
            statusDominioBuscado:[],
            domainFirstAdd:false,
            dominiobuscado:[],
            dominioguardado:[],
            dominioguardadostatus:[],
            dominiosrecomendados:'',
            dominiosencarrito:[],
            loading:[],
            domainOld:[],
            domainNew:[]
        };
    },
    mounted() {

        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));

        }

        this.jsoncarro.forEach((element, i) => {

                this.formvalores.push({
                    dominio: '',
                    ext: ''
                });

                this.formvalores2.push({
                    dominio: '',
                    ext: ''
                });

                this.statusDominioBuscado[i] = false;
                this.loading[i] = false;
                this.dominioguardado[i] = '';
                this.dominioguardadostatus[i] = false;
                this.domainOld[i] = false;
                this.domainNew[i] = true;

        })
        console.log(this.domainNew);
        /*
        console.log("formvalores");
        console.log(this.formvalores[0].dominio);

        console.log("formvalores2");
        console.log(this.formvalores2);
        */
        
        //this.getperiodosdominios();

        console.log("Carrito");
        console.log(this.jsoncarro);

        //obtener dominios en carrito
        let domicar = [];
        this.jsoncarro.forEach((element) => {

            if(element.categoria_id==2){

                domicar.push(element);

            }

        })

        if(domicar.length>0){
            this.dominiosencarrito = domicar;
        }

        console.log("Dominios en el carro");
        console.log(this.dominiosencarrito);

        
    },


    methods: {

        buscardominio(index){

            this.loading[index] = true;

            this.dominiosrecomendados = '';

            this.dominiobuscado[index] = this.formvalores[index].dominio+'.'+this.formvalores[index].ext;

            console.log("dominio buscado: "+this.dominiobuscado[index]);

            this.axios
            .post(`${this.urlBackend}/api/getdominio`, this.formvalores[index])
            .then((res) => {

                this.dominiosrecomendados = res.data.data.results;

                res.data.data.results.forEach((element) => {

                    console.log("dominio: "+element.domain+" ,estatus: "+element.status);
            
                    if(element.domain==this.dominiobuscado[index]){

                        
            
                        if(element.status=='free'){
            
                            this.statusDominioBuscado[index] = true;
            
                        }else{
            
                            this.statusDominioBuscado[index] = false;
            
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

            this.dominiosbuscados[index] = this.dominiosrecomendados;

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
            console.log(this.dominiosbuscados);


              
            })
            .catch((error) => {
                 console.log("error", error);

           
             });

             


        },

        changeOption(i){

            if(this.domainOld[i]==true){
                this.domainNew[i] = true;
                this.domainOld[i] = false;
                this.dominioguardado[i] = '';
            }else{
                this.domainOld[i] = true;
                this.domainNew[i] = false;
                this.dominiosencarrito[i] = [];
            }

        },

        getperiodosdominios(){

            let slug = 'dominio';

            this.axios.get(`${this.urlBackend}/api/getproductoscategoriaslug/${slug}`).then((response) => {

                console.log("dominios");

                console.log(response);

            });

        },

        guardardominio(index){

            this.dominioguardado[index] = this.formvalores2[index].dominio+'.'+this.formvalores2[index].ext;
            this.dominioguardadostatus[index] = true;

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito.forEach((element) => {

                if(element.categoria_id==1){
                    element.push({
                        'dominio':this.dominioguardado[index]
                    });
                }

        
            });

            localStorage.setItem('carrito',JSON.stringify(carrito));



        },

        cambiardominioguardado(index){

            this.dominioguardado[index] = '';
            this.dominioguardadostatus[index] = false;
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
                    console.log(element2);
                    if(domain==element2.domain){

                        carrito.push({
                            categoria_id:2,
                            producto: "Registro de dominio "+domain,
                            periodo: 2,
                            domain: domain,
                            precio: element2.price.reseller.price,
                            periodos: [],
                        });

                        this.domainFirstAdd = true;
                    }

                })
                localStorage.setItem('carrito',JSON.stringify(carrito));
                this.jsoncarro = carrito;

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

                carrito.push({
                    categoria_id:2,
                    producto: "Registro de dominio "+dataitem.domain,
                    periodo: 2,
                    domain: dataitem.domain,
                    precio: dataitem.price.reseller.price,
                    periodos: [],
                });

                //carrito.push(dataitem);
            }
  
            localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;
           
            console.log(carrito);
  
  
  
        },

        eliminarcarro(item){

            Swal.fire({
                position: "center",
                icon: "success",
                title:
                    "Datos actualizados correctamente.",
                showConfirmButton: false,
                timer: 2000
            });

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