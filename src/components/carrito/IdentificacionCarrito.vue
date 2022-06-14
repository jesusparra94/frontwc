<script>
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  data() {
    return {
      v$: useValidate(),
      urlBackend: this.urlBackend,
      jsoncarro: "",
      neto: "",
      iva: "",
      total: "",
      existe_email: false,
      submittedsearch: false,
      datosempresa:'',
      formsearchemail: {
        email: "",
      },
    };
  },
  validations() {
    return {
      formsearchemail: {
        email: {
          required,
          email,
        },
      },
    };
  },
  emits:['avanzarregistro'],

  mounted() {
    if (localStorage.getItem("carrito")) {
      this.jsoncarro = JSON.parse(localStorage.getItem("carrito"));

      this.jsoncarro.forEach((element, i) => {
        this.neto = element.precio;
      });

      this.iva = this.neto * 0.19;

      this.total = this.neto + this.iva;
    }

    let info =  JSON.parse(localStorage.getItem('info'));

        if(info){
         this.formsearchemail.email = info.email;
        }
  },

  methods: {
    formSearchSubmit() {
      this.submittedsearch = true;

      console.log(this.v$.formsearchemail);
      this.v$.formsearchemail.$touch();

      if (!this.v$.formsearchemail.$invalid) {

        let info =  JSON.parse(localStorage.getItem('info'));

        if(info){
          info.email = this.formsearchemail.email;

            localStorage.setItem('info',JSON.stringify(info));

        }
        this.axios
          .get(`${this.urlBackend}/api/empresa/${this.formsearchemail.email}`)
          .then((response) => {
            if(response.data.data){
                this.existe_email = true;
            }else{
                this.datosempresa = response.data.data;

                if(info){
                        info.detallesfacturacion = true;
                        info.identificacion = false;
                        info.confirmacion = false;

                    localStorage.setItem('info',JSON.stringify(info));

                }
                
                this.$emit('avanzarregistro', this.datosempresa)

            }
          });
      }
    },
  },
};
</script>

<template>
  <div class="col-md-6 col-12 col-sm-12">
    <h5>Inicia sesión con tus datos:</h5>

    <div class="card shadow-lg">
      <div class="card-body">
        <div class="col-md-12 mb-5">
          <form @submit.prevent="formSearchSubmit" v-if="!existe_email">
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                type="email"
                class="form-control"
                v-model="formsearchemail.email"
                placeholder="Ingresa tu correo electrónico"
                id="email"
                :class="{
                  'is-invalid':
                    submittedsearch && v$.formsearchemail.email.$invalid
                }"
              />
              <div class="invalid-feedback"></div>
            </div>

            <div class="row">
              <div class="col-md-12 d-flex justify-content-end p-2">
                <button type="submit" class="btn btn-primary">Continuar</button>
              </div>
            </div>
          </form>

          <form @submit.prevent="formloginSubmit" v-else>
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                type="email"
                class="form-control"
                v-model="formsearchemail.email"
                placeholder="Ingresa tu correo electrónico"
                id="email"
              />
              <div class="invalid-feedback"></div>
            </div>

            <div class="mb-3" v-if="existe_email">
              <label for="email" class="form-label">Contraseña</label>

              <input
                type="password"
                class="form-control"
                placeholder="Ingresa tu contraseña"
                id="pass"
              />

              <div class="invalid-feedback"></div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-end p-2">
                <button type="submit" class="btn btn-primary">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </form>

          <!-- <div class="row" v-else>
            <div class="col-md-12 d-flex justify-content-end p-2">
              <button class="btn btn-primary" @click="continuarpago()">
                Iniciar Sesión
              </button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
