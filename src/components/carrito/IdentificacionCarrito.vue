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
      submittedlogin: false,
      datosempresa: "",
      empresas: "",
      mostrardivempresa: false,
      mensajeerror: "",
      formsearchemail: {
        email: "",
      },
      formlogin: {
        email: "",
        password: "",
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
      formlogin: {
        email: {
          required,
          email,
        },
        password: {
          required,
        },
      },
    };
  },
  emits: ["avanzarregistro"],

  mounted() {
    if (localStorage.getItem("carrito")) {
      this.jsoncarro = JSON.parse(localStorage.getItem("carrito"));

      this.jsoncarro.forEach((element, i) => {
        this.neto = element.precio;
      });

      this.iva = this.neto * 0.19;

      this.total = this.neto + this.iva;
    }

    let info = JSON.parse(localStorage.getItem("info"));

    if (info) {
      this.formsearchemail.email = info.email;
    }
  },

  methods: {
    formSearchSubmit() {
      this.submittedsearch = true;

      console.log(this.v$.formsearchemail);
      this.v$.formsearchemail.$touch();

      if (!this.v$.formsearchemail.$invalid) {
        let info = JSON.parse(localStorage.getItem("info"));

        if (info) {
          info.email = this.formsearchemail.email;

          localStorage.setItem("info", JSON.stringify(info));
        }
        this.axios
          .get(`${this.urlBackend}/api/empresa/${this.formsearchemail.email}`)
          .then((response) => {
            if (response.data.data) {
              this.existe_email = true;
              this.formlogin.email = this.formsearchemail.email;
            } else {
              this.datosempresa = response.data.data;

              if (info) {
                info.detallesfacturacion = true;
                info.identificacion = false;
                info.confirmacion = false;

                localStorage.setItem("info", JSON.stringify(info));
              }

              this.$emit("avanzarregistro", this.datosempresa);
            }
          });
      }
    },

    formloginSubmit() {
      this.mensajeerror = "";

      this.submittedlogin = true;

      console.log(this.v$.formlogin);
      this.v$.formlogin.$touch();

      if (!this.v$.formlogin.$invalid) {
        this.axios
          .post(`${this.urlBackend}/api/login`, this.formlogin)
          .then((response) => {
            console.log(response);
            if (response.data.data) {
              if (response.data.data.empresas.length > 1) {
                this.empresas = response.data.data.empresas;
                this.mostrardivempresa = true;
              } else {
                this.datosempresa = response.data.data.empresas[0];
                let info = JSON.parse(localStorage.getItem("info"));

                if (info) {
                  info.detallesfacturacion = true;
                  info.identificacion = false;
                  info.confirmacion = false;

                  localStorage.setItem("info", JSON.stringify(info));
                }

                this.$emit("avanzarregistro", this.datosempresa);
              }
            } else {
              this.mensajeerror = response.data.message;
              console.log(response.data.message);
            }
          });
      }
    },

    seleccionarempresa(data) {
      this.datosempresa = data;
      let info = JSON.parse(localStorage.getItem("info"));

      if (info) {
        info.detallesfacturacion = true;
        info.identificacion = false;
        info.confirmacion = false;

        localStorage.setItem("info", JSON.stringify(info));
      }

      this.$emit("avanzarregistro", this.datosempresa);
    },
    nuevaempresa() {
      this.datosempresa = "";
      let info = JSON.parse(localStorage.getItem("info"));

      if (info) {
        info.detallesfacturacion = true;
        info.identificacion = false;
        info.confirmacion = false;

        localStorage.setItem("info", JSON.stringify(info));
      }

      this.$emit("avanzarregistro", this.datosempresa);
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
                    submittedsearch && v$.formsearchemail.email.$invalid,
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

          <form
            @submit.prevent="formloginSubmit"
            v-if="existe_email && !mostrardivempresa"
          >
            <div class="mb-3">
              <h6 class="text-danger" v-if="mensajeerror != ''">
                {{ mensajeerror }}
              </h6>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                type="email"
                class="form-control"
                v-model="formlogin.email"
                placeholder="Ingresa tu correo electrónico"
                id="email"
                :class="{
                  'is-invalid': submittedlogin && v$.formlogin.email.$invalid,
                }"
              />
              <div class="invalid-feedback"></div>
            </div>

            <div class="mb-3" v-if="existe_email">
              <label for="email" class="form-label">Contraseña</label>

              <input
                type="password"
                class="form-control"
                v-model="formlogin.password"
                placeholder="Ingresa tu contraseña"
                id="pass"
                :class="{
                  'is-invalid':
                    submittedlogin && v$.formlogin.password.$invalid,
                }"
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

          <div class="row" v-if="mostrardivempresa">
            <div class="col-12 mb-2" v-for="(item, i) in empresas" :key="i">
              <div
                class="card cardempresa"
                style="cursor: pointer"
                @click="seleccionarempresa(item)"
              >
                <div class="card-body">
                  <p class="card-title">
                    <strong
                      ><span>{{ item.nombre }}</span>
                      <span class="float-md-end">{{ item.rut }}</span>
                    </strong>
                  </p>

                  <p class="card-title">
                    <span>{{ item.giro }}</span>
                  </p>

                  <p class="card-text text-center">Comprar con esta empresa</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="cursor: pointer" @click="nuevaempresa()">
                <div class="card-body text-center">
                  <p class="card-text">Registrar una nueva empresa</p>
                </div>
              </div>
            </div>
          </div>

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
<style scoped>
.cardempresa:hover {
  border-color: rebeccapurple !important;
}
</style>
