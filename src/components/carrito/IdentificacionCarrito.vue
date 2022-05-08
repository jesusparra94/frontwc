<script>
export default {
  
  data(){
    return {
        jsoncarro:'',
        neto:'',
        iva:'',
        total:''
    }
  },
    mounted() {

        if(localStorage.getItem('carrito')){

            this.jsoncarro =  JSON.parse(localStorage.getItem('carrito'));
            
            this.jsoncarro.forEach((element, i) => {

                this.neto = element.precio;

            });

            this.iva = this.neto * 0.19;

            this.total = this.neto + this.iva;

        }
        
    },


    methods: {

       

    }
  
}
</script>

<template>

<div class="col-md-6 col-12 col-sm-12">
                    
    <h5>Inicia sesión con tus datos:</h5>

    <div class="card shadow-lg">
        
        <div class="card-body">

            <div class="col-md-12 mb-5">

                <form>

                    <div class="mb-3">

                        <label for="email" class="form-label">Correo electrónico</label>
                        <input
                        type="email"
                        class="form-control"
                        
                        placeholder="Ingresa tu correo electrónico"
                        id="email"
                        

                        />
                        <div class="invalid-feedback" >
                        
                        </div>
                    </div>

                    <div class="mb-3">

                        <label for="email" class="form-label">Contraseña</label>
                        
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Ingresa tu contraseña"
                                id="pass"
                            />

                            <div class="invalid-feedback" >
                        
                            </div>

                    </div>

                    </form>

                    <div class="row">

                        <div class="col-md-12 d-flex justify-content-end p-2">

                            <button class="btn btn-primary" @click="continuarpago()">Iniciar Sesión</button>

                        </div>

                    </div>

            </div>

        </div>

    </div>
        
</div>

</template>