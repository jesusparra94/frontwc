<script lang="ts">
export default {
  
  data(){
    return {
        jsoncarro:'',
        neto:0,
        iva:0,
        total:0,
        precioDolar:0,
        maspesos:10
    }
  },
    mounted() {

        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));

            
            this.axios.get(`${this.urlBackend}/api/getpreciodolar`).then((response) => {

                //console.log(response.data.serie);

                // let cont = 0;

                // let arrayDatos = [];

                // response.data.serie.forEach((element, i) => {

                //     cont++;

                //     if(cont==1){

                //         arrayDatos.push({

                //             fecha: element.fecha.split('T')[0],
                //             precio: element.valor

                //         });
                //     }

                // });

                this.precioDolar = response.data.precio;
                
                this.jsoncarro.forEach((element, i) => {

                    if(element.categoria_id===2){

                        this.neto = this.neto + element.precio * ( this.precioDolar + this.maspesos );

                    }else{

                        this.neto = this.neto + element.precio;

                    }


                });

                this.iva = this.neto * 0.19;

                this.total = this.neto + this.iva;

                console.log("Neto neto: "+this.neto);
                console.log("IVA iva: "+this.iva);
                console.log("TOTAL: "+this.total);


            });

        }
        
    },


    methods: {

        // getdolar(){

        //     let arrayDatos = [];

        //     this.axios.get(`${this.urlBackend}/api/getpreciodolar`).then((response) => {

        //         //console.log(response.data.serie);

        //         let cont = 0;

        //         response.data.serie.forEach((element, i) => {
        //             cont++;
        //             if(cont==1){
        //                 arrayDatos.push({

        //                     fecha: element.fecha.split('T')[0],
        //                     precio: element.valor

        //                 });
        //             }

        //         });

        //         this.precioDolar = arrayDatos[0].precio;

        //     });

        //     return true;

        // }

    },

    props: ['carrito','neto','iva','total']
  
}
</script>

    <template>
        
        <div class="card shadow-lg">
            
            <div class="card-body p-0">

                <div class="row pt-2 px-5 d-flex align-items-center"
                     v-for="(item, i) in carrito" :key="i"
                     :class="{'d-none': item.id_producto==4}"
                >   
                
                    <hr class="mb-1 mt-1">

                    <div class="col-md-7">
                        
                        <h6 v-if="item.categoria_id==2">
                            
                            {{item.producto}}

                        </h6>

                        <h6 v-else>

                            {{item.nombre}}

                            <span v-if="item.dominio!=''">para {{item.dominio}}</span>

                        </h6>

                    </div>

                    <div class="col-md-5">

                        <div style="line-height:1;">

                            <h6 style="font-size:16px" v-if="item.categoria_id==2"> {{$filters.currencyUSD(item.precio*(precioDolar+10))}} CLP por 1 año</h6>

                            <h6 style="font-size:16px" v-else> 


                                <b  v-for="(item1, j) in item.periodosproducto" :key="j">
      
                                    <h6 v-if="item1.periodo_id===item.periodo"
                                    >
                                        
                                        {{$filters.currencyUSD(item1.precio)}} CLP
                                    </h6>

                                </b>

                            </h6>

                        </div>

                    </div>

                </div>

                <hr class="mt-5 mb-3" />

                <!-- <div class="row">

                    <div class="col-md-12 px-4">

                        <form>

                            <div class="form-group d-flex justify-content-center">
                                
                                <label class="input">
                                
                                    <input
                                        class="input__field"
                                        style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;max-height:40px"
                                        type="text"
                                        placeholder=" "
                                        id="cupon"
                                        name="cupon"
                                        required
                                    />

                                    <span class="input__label" style="font-size:12px">Cupón de descuento</span>

                                </label>

                                    <button
                                    type="button"
                                    class="btn"

                                    style="
                                        background-color: #005ad2; color: #f2f3f5; font-weight: bold; border-top-left-radius: 0px; border-bottom-left-radius: 0px;max-height:40px;font-size:13px;
                                    "
                                    >
                                    Aplicar
                                    </button>

                            </div>

                        </form>
                        
                    </div>

                </div>

                <hr class="mt-5 mb-3" /> -->

                <div class="row px-5 pb-1">

                    <div class="col-md-7">

                        <h6 class=" pt-1"><b>Neto pedido</b></h6>

                    </div>

                    <div class="col-md-5">

                        <h6 class="pt-1"><b>{{$filters.currencyUSD(neto)}} CLP</b></h6>

                    </div>

                </div>

                <div class="row px-5 pb-1">

                    <div class="col-md-7">

                        <h6 class="pt-1"><b>IVA pedido</b></h6>

                    </div>

                    <div class="col-md-5">

                        <h6 class="pt-1"><b>{{$filters.currencyUSD(iva)}} CLP</b></h6>

                    </div>

                </div>

                <div class="row px-5 pb-1">

                    <div class="col-md-7">

                        <h6 class="pt-1"><b>Total pedido</b></h6>

                    </div>

                    <div class="col-md-5">

                        <h6 class="pt-1"><b>{{$filters.currencyUSD(total)}} CLP</b></h6>

                        <!-- <small class="">Ahorra 2.600 CLP</small> -->

                    </div>

                </div>

                <!-- <hr class="mt-5 mb-3" />

                <div class="row">

                    <div class="col-md-12 d-flex justify-content-end p-5">

                        <a href="#" class="btn btn-primary" @click="continuaridentificacion()">Continuar</a>

                    </div>

                </div> -->

            </div>
            
        </div>

    </template>