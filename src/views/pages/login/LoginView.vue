<script lang="ts">
import Nav from "@/components/Nav2.vue";
import Footer from "@/components/Footer.vue";
import { required, email } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      formlogin: {
        email: "",
        password: "",
      },
      v$: useValidate(),
      urlBackend: this.urlBackend,
    };
  },

  validations() {
    return {
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

  mounted() {
    if (localStorage.getItem("token")) {
      this.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      this.axios.get(`${this.urlBackend}/api/validartoken`).then(
        (response) => {
          if (response) {
            this.$router.push("/cuenta");
          }
        },
        (error) => {
          localStorage.removeItem("token");
        }
      );
    }
  },

  methods: {
    formloginSubmit() {
      this.submittedlogin = true;

      console.log(this.v$.formlogin);
      this.v$.formlogin.$touch();

      if (!this.v$.formlogin.$invalid) {
        this.axios
          .post(`${this.urlBackend}/api/login`, this.formlogin)
          .then((response) => {
            if (response.data.data.token) {
              localStorage.setItem("token", response.data.data.token);

              this.$router.push("/cuenta");
            }

            //   aqui alerta de error
          });
      }
    },
  },
};
</script>

<template>
  <Nav />


  <section class="wrapper bg-light mb-5">
    <div class="container pt-5 pb-5">
      <div class="row mt-5 d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-5">
          <div class="card shadow-lg">
            <div class="card-body">
              <div class="col-12 mb-5">

                <p class="text-center">
                  <i class="fa-solid fa-circle-user text-primary" style="font-size:50px;"></i>
                </p>
                <h3 class="text-primary mb-3 text-center">Portal del nuestros clientes</h3>

                <form @submit.prevent="formloginSubmit">
                  <div class="mb-3">
                    <h6 class="text-danger" v-if="mensajeerror != ''">
                      {{ mensajeerror }}
                    </h6>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label"
                      >Correo electrónico</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      v-model="formlogin.email"
                      placeholder="Ingresa tu correo electrónico"
                      id="email"
                      :class="{
                        'is-invalid':
                          submittedlogin && v$.formlogin.email.$invalid,
                      }"
                    />
                    <div class="invalid-feedback"></div>
                  </div>

                  <div class="mb-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
