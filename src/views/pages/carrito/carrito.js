import Nav from '@/components/Nav.vue'
import DetallesServicio from '@/components/DetallesServicio.vue'
import DetallesCarrito from '../../../components/carrito/DetallesCarrito.vue'
import IdentificacionCarrito from '@/components/carrito/IdentificacionCarrito.vue'
import DetallesFacturacion from  '@/components/carrito/DetallesFacturacion.vue'
import Footer from '@/components/Footer.vue'
import useValidate from "@vuelidate/core";
import {
    required,
    email,
    maxLength,
    minLength
} from "@vuelidate/validators";
import { idText } from 'typescript'

export default {
    components: {
        Nav,
        DetallesServicio,
        DetallesCarrito,
        IdentificacionCarrito,
        DetallesFacturacion,
        Footer
      },
    data() {
        return {
            urlpago:"",
            carritoView:true,
            identificacionView:false,
            pago:false,
            confirmacion:false,
            precioDolar:'',
            arrayDolares:[],
            isActive: true,
            jsoncarro:'',
            periodosdominios:'',
            urlBackend: this.urlBackend,
            formvalores: [],
            formvalores2: [],
            formvalores3: {
                dominio: '',
                ext: 'cl'
            },
            mensajeerror: [],
            selectperiodo: [],
            productosconerror:false,
            dominiosbuscados: [],
            dominiosbuscados_page: '',
            totales: {
                neto:0,
                iva:0,
                total:0
            },
            statusDominioBuscado:[],
            statusDominioBuscado_page:'',
            domainFirstAdd:[],
            domainFirstAdd_page:false,
            dominiobuscado:[],
            dominiobuscado_page: '',
            dominioguardado:[],
            dominioguardadostatus:[],
            dominiosrecomendados:'',
            dominiosencarrito:[],
            loading:[],
            loading_page:'',
            domainOld:[],
            domainNew:[],

            v$: useValidate(),
            email: "",
            password: {
                password: "",
                confirm: "",
            },
        };
    },

    validations() {
        return {
            email: { required },
            password: {
                password: { required },
                confirm: { required },
            }
        }
    },

    mounted() {

        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));
            this.calcularTotales();

        }

        let carrito = [];
  
        carrito =  JSON.parse(localStorage.getItem('carrito'));

        this.jsoncarro.forEach((element, i) => {

                this.formvalores.push({
                    dominio: '',
                    ext: ''
                });

                this.formvalores2.push({
                    dominio: '',
                    ext: ''
                });


                this.selectperiodo.push({
                    periodo_id: element.periodo
                });

                this.mensajeerror.push({
                    dominio:''
                });

                this.statusDominioBuscado[i] = false;
                this.loading[i] = false;
                this.dominioguardado[i] = '';
                this.dominioguardadostatus[i] = false;
                this.domainOld[i] = false;
                this.domainNew[i] = true;
                this.domainFirstAdd[i] = false;

        })

        //obtener dominios en carrito
        this.listarDomainsCarrito();

        this.precioDolarHoy = this.getdolar();

        let info =  JSON.parse(localStorage.getItem('info'));

        if(info){

            if(info.identificacion){
                this.carritoView = false;
                this.pago = false;
                this.confirmacion = false
                this.identificacionView = true;

            }else if(info.detallesfacturacion){

                this.carritoView = false;
                this.confirmacion = false
                this.identificacionView = false;
                this.pago = true;

            }else if(info.confirmacion){
                this.carritoView = false;
                this.identificacionView = false;
                this.pago = false;
                this.confirmacion = true;

            }

        }



        // this.v$.$validate() // checks all inputs
  		// 		if (!this.v$.$error) { // if ANY fail validation
  		// 			alert('Form successfully submitted.')
  		// 		} else {
  		// 			alert('Form failed validation')
  		// 		}

        console.log("detalles de carrito");
        console.log(this.jsoncarro);

        
    },


    methods: {

        // emit 

        nextdetallesfacturacion(data){
            console.log(data)
            // si data es distinto a null el formulario va a cargar con los datos
            if(data){

                let info =  JSON.parse(localStorage.getItem('info'));
                        info.email = data.email;
                        info.nombre = data.nombre;
                        info.giro = data.giro;
                        info.rut = data.rut;
                        info.telefono = data.telefono;
                        info.direccion = data.direccion;
                        info.comuna = data.comuna;
                        info.ciudad = data.ciudad;

                localStorage.setItem('info',JSON.stringify(info));


            }

            console.log("no llega")

            this.identificacionView = false;
            this.pago = true;
        },

        nextconfirmacion(data){

            this.urlpago = data;

            this.pago = false;
            let info =  JSON.parse(localStorage.getItem('info'));
                        info.detallesfacturacion = false;
                        info.identificacion = false;
                        info.confirmacion = true;

            localStorage.setItem('info',JSON.stringify(info));

            this.confirmacion = true;


        },

        submitFormNewDomain(){
            this.v$.password.$validate() // checks all inputs
  				if (!this.v$.password.$error) { // if ANY fail validation
  					alert('Form successfully submitted.')
  				} else {
  					alert('Form failed validation')
  				}
        },

        buscardominio(index){

            if(this.formvalores[index].dominio!='' && this.formvalores[index].ext!=''){

                this.mensajeerror[index].dominio = '';

                this.loading[index] = true;

                this.dominiosrecomendados = '';
                
                this.dominiosbuscados[index] = '';

                this.dominiobuscado[index] = this.formvalores[index].dominio+'.'+this.formvalores[index].ext;

                this.axios
                .post(`${this.urlBackend}/api/getdominio`, this.formvalores[index])
                .then((res) => {

                    this.dominiosrecomendados = res.data.data.results;

                    res.data.data.results.forEach((element) => {

                        console.log(element);

                        console.log("dominio: "+element.domain+" ,estatus: "+element.status);
                
                        if(element.domain==this.dominiobuscado[index]){
                
                            if(element.status=='free'){
                
                                this.statusDominioBuscado[index] = true;
                
                            }else{
                
                                this.statusDominioBuscado[index] = false;
                
                            }
                            
                        }
                
                        this.dominiosrecomendados.forEach((element2) => {
                
                        if(element.dominio===element2.domain){
                
                            element.agregado = true;
                
                        }else{
                            element.agregado = false;
                        }
                
                        });
                
                    });

                    this.dominiosbuscados[index] = this.dominiosrecomendados;

                    console.log("Dominios buscados");
                    console.log(this.dominiosbuscados[index]);

                    //verificar items en el carro

                    let carrito = [];
        
                    carrito =  JSON.parse(localStorage.getItem('carrito'));

                    carrito.forEach((element) => {

                        this.dominiosrecomendados.forEach((element2) =>{

                            if(element.dominio==element2.domain){
                                element2.agregado = true;
                            }

                        })

                
                    });
                
                })
                .catch((error) => {
                    
                    console.log("error", error);
            
                });

            }else{

                this.mensajeerror[index].dominio = 'Debe ingresar un dominio y su extensión';

            }

        },

        buscardominio_page(){

            this.loading_page = true;

            this.dominiosrecomendados = '';
            
            this.dominiosbuscados_page = '';

            this.dominiobuscado_page = this.formvalores3.dominio+'.'+this.formvalores3.ext;

            this.axios
            .post(`${this.urlBackend}/api/getdominio`, this.formvalores3)
            .then((res) => {

                this.dominiosrecomendados = res.data.data.results;

                res.data.data.results.forEach((element) => {

                    console.log(element);

                    console.log("dominio: "+element.domain+" ,estatus: "+element.status);
            
                    if(element.domain==this.dominiobuscado_page){
            
                        if(element.status=='free'){
            
                            this.statusDominioBuscado_page = true;
            
                        }else{
            
                            this.statusDominioBuscado_page = false;
            
                        }
                        
                    }
            
                    this.dominiosrecomendados.forEach((element2) => {
            
                    if(element.dominio===element2.domain){
            
                        element.agregado = true;
            
                    }else{
                        element.agregado = false;
                    }
            
                    });
            
                });

                this.dominiosbuscados_page = this.dominiosrecomendados;

                console.log("Dominios buscados");
                console.log(this.dominiosbuscados_page);

                //verificar items en el carro

                let carrito = [];

                carrito =  JSON.parse(localStorage.getItem('carrito'));

                carrito.forEach((element) => {

                    this.dominiosrecomendados.forEach((element2) =>{

                        if(element.dominio==element2.domain){
                            element2.agregado = true;
                        }

                    })

            
                });
            
            })
            .catch((error) => {
                
                console.log("error", error);
        
                });




        },

        PeriodoItem(i){

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            let periodo_id = this.selectperiodo[i].periodo_id;

            let producto_id = carrito[i].id_producto;

            this.axios.get(`${this.urlBackend}/api/getperiodo/${producto_id}/${periodo_id}`).then((response) => {

                console.log("respuesta de periodo");

                console.log(response.data);

                carrito[i].periodo = periodo_id;

                carrito[i].precio = response.data.precio_descuento;

                localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;
           
            this.listarDomainsCarrito();

            this.calcularTotales();


            });
            


            // carrito[i].periodosproducto.forEach((element) => {

            //     if(element.domain==dataitem.domain){
            //         element.agregado = true;
            //         existed = true;
            //     }

        
            // });

            // console.log(carrito[i]);



        },

        changeOption(i){

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito[i].dominio = '';

            localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;

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

            if(this.formvalores2[index].dominio!='' && this.formvalores2[index].ext!=''){

                this.dominioguardado[index] = this.formvalores2[index].dominio+'.'+this.formvalores2[index].ext;

                this.dominioguardadostatus[index] = true;

                let carrito = [];
    
                carrito =  JSON.parse(localStorage.getItem('carrito'));

                carrito[index].dominio = this.dominioguardado[index];

                localStorage.setItem('carrito',JSON.stringify(carrito));

                this.jsoncarro = carrito;

            }else{

                this.mensajeerror[index].dominio = 'Debes ingresar un dominio para tu hosting';

            }

        },

        cambiardominioguardado(index){

            this.dominioguardado[index] = '';

            this.dominioguardadostatus[index] = false;

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito[index].dominio = '';

            localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;
        },

        addFirstDomain(domain, index){

            let exisd = false;

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito.forEach((element) => {

                if(element.dominio==domain){
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
                            dominio: domain,
                            precio: element2.price.reseller.price,
                            periodos: [],
                        });

                        this.domainFirstAdd[index] = true;
                    }

                })
                localStorage.setItem('carrito',JSON.stringify(carrito));
                this.jsoncarro = carrito;

            }

            this.dominioguardado[index] = domain;

            this.dominioguardadostatus[index] = true;
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito[index].dominio = this.dominioguardado[index];

            localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;

            console.log("carro actualizado");

            console.log(carrito);

            this.listarDomainsCarrito();

            this.calcularTotales();

        },

        addFirstDomain_page(domain){

            let exisd = false;

            let carrito = [];
  
            carrito =  JSON.parse(localStorage.getItem('carrito'));

            carrito.forEach((element) => {

                if(element.dominio==domain){
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
                            dominio: domain,
                            precio: element2.price.reseller.price,
                            periodos: [],
                        });

                        this.domainFirstAdd_page = true;
                    }

                })
                localStorage.setItem('carrito',JSON.stringify(carrito));
                this.jsoncarro = carrito;

            }

            this.dominioguardado_page = domain;

            //this.dominioguardadostatus[index] = true;
  
            //carrito =  JSON.parse(localStorage.getItem('carrito'));

            //carrito[index].dominio = this.dominioguardado[index];

            //localStorage.setItem('carrito',JSON.stringify(carrito));

            //this.jsoncarro = carrito;

            console.log("carro actualizado");

            console.log(carrito);

            this.listarDomainsCarrito();

            this.calcularTotales();

        },

        addcarro(dataitem, index){

            let carrito = [];
  
            if(localStorage.getItem('carrito')){
  
              carrito =  JSON.parse(localStorage.getItem('carrito'));
  
            }

            let existed = false;

            carrito.forEach((element) => {

                if(element.domain==dataitem.domain){
                    element.agregado = true;
                    existed = true;
                }

        
            });

            if(!existed){ //si no existe en carro se agrega
                dataitem.agregado = true;

                carrito.push({
                    categoria_id:2,
                    producto: "Registro de dominio "+dataitem.domain,
                    periodo: 2,
                    dominio: dataitem.domain,
                    precio: dataitem.price.reseller.price,
                    periodos: [],
                });

                //carrito.push(dataitem);
            }

            if(carrito[index].dominio==''){
                carrito[index].dominio = dataitem.domain;
            }
  
            localStorage.setItem('carrito',JSON.stringify(carrito));

            this.jsoncarro = carrito;
           
            this.listarDomainsCarrito();

            this.calcularTotales();
  
  
  
        },

        eliminarcarro(i){

            let carrito = [];
  
            if(localStorage.getItem('carrito')){
  
              carrito =  JSON.parse(localStorage.getItem('carrito'));
  
            }

            Swal.fire({
                position: 'center',
                title: '¿Estás seguro de querer eliminar el producto?',
                showConfirmButton: true,
                confirmButtonColor: '#7B47CF',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
                width: '350px',
                customClass: {
                    popup: 'alerta'
                  }
              }).then((result) => {
                if (result.isConfirmed) {
                  
                    carrito.splice(i, 1);

                    localStorage.setItem('carrito',JSON.stringify(carrito));

                    this.jsoncarro = carrito;
                
                    this.listarDomainsCarrito();

                    this.calcularTotales();

                }
              })

        },

        getdolar(){

            let arrayDatos = [];

            this.axios.get(`${this.urlBackend}/api/getpreciodolar`).then((response) => {

                //console.log(response.data.serie);

                let cont = 0;

                response.data.serie.forEach((element, i) => {
                    cont++;
                    if(cont==1){
                        arrayDatos.push({

                            fecha: element.fecha.split('T')[0],
                            precio: element.valor

                        });
                    }

                });

                this.precioDolar = arrayDatos[0].precio;
                console.log(this.precioDolar);

            });


            

        },

        listarDomainsCarrito(){

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

        },

        calcularTotales(){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));

            this.axios.get(`${this.urlBackend}/api/getpreciodolar`).then((response) => {

                //console.log(response.data.serie);

                let cont = 0;

                let arrayDatos = [];

                this.totales.neto = 0;
                this.totales.iva = 0;
                this.totales.total = 0;

                response.data.serie.forEach((element, i) => {

                    cont++;

                    if(cont==1){

                        arrayDatos.push({

                            fecha: element.fecha.split('T')[0],
                            precio: element.valor

                        });
                    }

                });

                this.precioDolar = arrayDatos[0].precio;
                
                this.jsoncarro.forEach((element, i) => {

                    if(element.categoria_id===2){

                        this.totales.neto = this.totales.neto + element.precio * ( this.precioDolar + 10 );

                    }else{

                        this.totales.neto = this.totales.neto + element.precio;

                    }


                });

                this.totales.iva = this.totales.neto * 0.19;

                this.totales.total = this.totales.neto + this.totales.iva;


            });

        },

        continuaridentificacion(){

            if(this.validarCarro()){

                let info = {
                    email:'',
                    nombre:'',
                    giro:'',
                    rut:'',
                    telefono:'',
                    direccion:'',
                    comuna:'',
                    ciudad:'',
                    identificacion: true,
                    detallesfacturacion:false,
                    confirmacion:false

                };

                localStorage.setItem('info',JSON.stringify(info));

                this.carritoView = false;
                this.identificacionView = true;

            }else{

                this.productosconerror = true;
                //this.scrollto('topListadoProductos');

            }

        },

        continuarpago(){
            this.identificacionView = false;
            this.pago = true;
        },

        continuarconfirmacion(){
            this.pago = false;
            this.confirmacion = true;
        },

        validarCarro(){

            let carrito = [];

            let aux = true;
  
            if(localStorage.getItem('carrito')){
  
              carrito =  JSON.parse(localStorage.getItem('carrito'));
  
            }

            carrito.forEach((element, i) => {

                if(element.categoria_id==1){
                    
                    if(element.dominio==''){

                        this.mensajeerror[i].dominio = 'Debes ingresar un dominio para tu hosting';
                        aux = false;

                    }

                }
        
            });

            return aux;

        },
        scrollto(id){

            var element = document.getElementById(idText);

            element.scrollIntoView({behavior: "smooth"});
    
        }

    }
};