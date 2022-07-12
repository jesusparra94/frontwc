<script lang="ts">
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  data() {
    return {
      v$: useValidate(),
      urlBackend: this.urlBackend,
      submitted: false,
      rutinvalido:false,
      isLoading: true,
      form: {
        nombre: "",
        giro: "",
        rut: "",
        telefono: "",
        direccion: "",
        comuna: "",
        ciudad: "",
        email: "",
      },
      ciudades: [],
      comunas:[]
    };
  },
  emits:['avanzarconfirm'],
  validations() {
    return {
      form: {
        nombre: { required },
        rut: { required },
        telefono: { required },
        direccion: { required },
        comuna: { required },
        ciudad: { required },
        email: {
          required,
          email,
        },
      }
    };
  },
  mounted(){

    let info =  JSON.parse(localStorage.getItem('info'));

    this.form.email = info.email;
    this.form.nombre = info.nombre;
    this.form.giro = info.giro;
    this.form.rut = info.rut;
    this.form.telefono = info.telefono;
    this.form.direccion = info.direccion;
    this.form.comuna = info.comuna;
    this.form.ciudad = info.ciudad;

    if(this.form.ciudad){
      this.getcomunas(this.form.ciudad);
    }

    this.getregiones();

  },

  created() {
    this.axios.interceptors.request.use(
      (config) => {
        this.isLoading = true;
        return config;
      },
      (error) => {
        this.isLoading = false;
        return Promise.reject(error);
      }
    );

    this.axios.interceptors.response.use(
      (response) => {
        this.isLoading = false;
        return response;
      },
      (error) => {
        this.isLoading = false;
        return Promise.reject(error);
      }
    );
  },

  methods:{
      formSubmit() {
      this.submitted = true;

      console.log(this.v$.form);
      this.v$.form.$touch();

      if (!this.v$.form.$invalid) {

          this.form.carro = JSON.parse(localStorage.getItem('carrito'));

          this.axios
                .post(`${this.urlBackend}/api/generarorder`, this.form)
                .then((res) => {

                    if(res.data){
                        this.$emit('avanzarconfirm', res.data);
                        this.scrollto('body-carrito');
                    }

                    console.log(res)

                })
                .catch((error) => {
                    
                    console.log("error", error);
                    console.log(error.response.data);
            
                });
        
      }
    },

    changeRegion(){

      let info =  JSON.parse(localStorage.getItem('info'));
                        info.email = this.form.email;
                        info.nombre = this.form.nombre;
                        info.giro = this.form.giro;
                        info.rut = this.form.rut;
                        info.telefono = this.form.telefono;
                        info.direccion = this.form.direccion;
                        info.comuna = this.form.comuna;
                        info.ciudad = this.form.ciudad;

      //obtener comunas
      this.getcomunas(info.ciudad);

      localStorage.setItem('info',JSON.stringify(info));

    },

    changeInput(){

      let info =  JSON.parse(localStorage.getItem('info'));
                        info.email = this.form.email;
                        info.nombre = this.form.nombre;
                        info.giro = this.form.giro;
                        info.rut = this.form.rut;
                        info.telefono = this.form.telefono;
                        info.direccion = this.form.direccion;
                        info.comuna = this.form.comuna;
                        info.ciudad = this.form.ciudad;

      localStorage.setItem('info',JSON.stringify(info));
    },

    validaRut() {
     this.rutinvalido = true;
      var rutCompleto = this.form.rut.trim().replace(".", "");
      rutCompleto = rutCompleto.replace("‐", "-");
      
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        
        this.rutinvalido = true;
      }
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      console.log(this.rutinvalido) ;
      
      if (digv == "K") digv = "k";

      if(this.dv(rut) == digv){
         this.rutinvalido = false;
         this.form.rut = rutCompleto;
      }

      console.log(this.rutinvalido) ;
    },
    dv(T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },

    getregiones(){
      
      this.axios
        .get(`${this.urlBackend}/api/getregiones`)
        .then((res) => {

          this.ciudades = res.data;
          console.log("Ciudades");
          console.log(res.data);
      })
    },

    getcomunas(id_region){
      
      //obtener comunas
      this.axios
        .get(`${this.urlBackend}/api/getcomunas/${id_region}`)
        .then((res) => {

          this.comunas = res.data;
          console.log("Comunas");
          console.log(res.data);
      })

    }



  }
};
</script>

<template>
  <div class="col-md-12">
    <h3>Detalles para facturación:</h3>

    <div class="card shadow-lg">
      <div class="card-body">
        <div class="col-md-12 mb-5">
          <div
            class="card pt-4 pb-5 d-flex justify-content-center align-items-center"
          >
            <div class="row" style="width: 100%">
              <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">
                <h6>Datos básicos</h6>
              </div>

              <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">
                <form
                  class="contact-form needs-validation"
                  @submit.prevent="formSubmit"
                >
                  <div class="messages"></div>

                  <div class="row gx-4">
                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="nombre"
                          type="text"
                          name="nombre"
                          class="form-control"
                          placeholder="Jane"
                          v-model="form.nombre"
                          @change="changeInput()"
                          :class="{
                            'is-invalid': submitted && v$.form.nombre.$invalid,
                          }"
                        />
                        <label for="nombre">Nombre o Razón social</label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="giro"
                          type="text"
                          name="giro"
                          class="form-control"
                          placeholder="Giro"
                          v-model="form.giro"
                          @change="changeInput()"
                          
                        />
                        <label for="giro">Giro (opcional)</label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="rut"
                          type="text"
                          name="rut"
                          class="form-control"
                          placeholder="RUT"
                          v-model="form.rut"
                          @change="changeInput()"
                          @keyup="validaRut()"
                          :class="{
                            'is-invalid': (submitted && v$.form.rut.$invalid) || rutinvalido,
                          }"
                        />
                        <label for="rut">RUT</label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="jane.doe@example.com"
                          v-model="form.email"
                          @change="changeInput()"
                          :class="{
                            'is-invalid': submitted && v$.form.email.$invalid,
                          }"
                        />
                        <label for="email">Email </label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="telefono"
                          type="number"
                          name="telefono"
                          class="form-control"
                          placeholder="99999999"
                          v-model="form.telefono"
                          @change="changeInput()"
                          :class="{
                            'is-invalid':
                              submitted && v$.form.telefono.$invalid,
                          }"
                        />
                        <label for="telefono">Teléfono</label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating mb-4">
                        <input
                          id="direccion"
                          type="text"
                          name="direccion"
                          class="form-control"
                          placeholder="Santiago"
                          v-model="form.direccion"
                          @change="changeInput()"
                          :class="{
                            'is-invalid':
                              submitted && v$.form.direccion.$invalid,
                          }"
                        />
                        <label for="direccion">Dirección</label>
                        <div class="valid-feedback"></div>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-floating mb-4">
                        <div class="form-select-wrapper">
                          <select
                            class="form-select"
                            id="form-select"
                            name="ciudad"
                            v-model="form.ciudad"
                            @change="changeRegion()"
                            :class="{
                              'is-invalid':
                                submitted && v$.form.ciudad.$invalid,
                            }"
                          >

                            <option selected disabled value="">Región</option>

                            <template  v-for="(ciudad, i) in ciudades" :key="i">

                              <option v-if="ciudad.REG_ID===form.ciudad"
                                      :value="ciudad.REG_ID"
                                      :selected="true"
                              >
                                  
                                  {{ciudad.REG_NOMBRE}}
                              </option>

                              <option v-else
                                      :value="ciudad.REG_ID"
                                      :selected="false"
                              >
                                   {{ciudad.REG_NOMBRE}}
                              </option>

                          </template>


                          </select>

                          <div class="valid-feedback"></div>
                          <div class="invalid-feedback"></div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-floating mb-4">
                        <div class="form-select-wrapper">
                          <select
                            class="form-select"
                            id="form-select"
                            name="comuna"
                          v-model="form.comuna"
                            @change="changeInput()"
                            :class="{
                              'is-invalid':
                                submitted && v$.form.comuna.$invalid,
                            }"
                          >
                            
                          <option selected disabled value="">Comuna</option>

                          <template  v-for="(comuna, i) in comunas" :key="i">

                              <option v-if="comuna.COM_ID===form.comuna"
                                      :value="comuna.COM_ID"
                                      :selected="true"
                              >
                                  
                                  {{comuna.COM_NOMBRE}}
                              </option>

                              <option v-else
                                      :value="comuna.COM_ID"
                                      :selected="false"
                              >
                                   {{comuna.COM_NOMBRE}}
                              </option>

                          </template>

                          </select>

                          <div class="valid-feedback"></div>
                          <div class="invalid-feedback"></div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 mb-5">
                      <div
                        class="card pt-4 pb-5 d-flex justify-content-center align-items-center"
                      >
                        <div class="row" style="width: 100%">
                          <div
                            class="col-md-12 col-12 col-sm-12 d-flex align-items-center"
                          >
                            <h6>Selecciona tu metodo de pago</h6>
                          </div>

                          <div
                            class="col-md-12 col-12 col-sm-12 d-flex align-items-center"
                          >
                            <div class="row align-items-center">
                              <div class="col-md-4 col-12 col-sm-12 mb-3">
                                <div class="btn btn-metodospago card-border">
                                  <div class="text-start">
                                    <input
                                      type="radio"
                                      class="form-check-input"
                                      checked
                                      autocomplete="off"
                                    />
                                  </div>

                                  <label
                                    class="px-0 pb-0 opcion-metodo-pago"
                                    for="periodo1"
                                  >
                                    <div class="container-img">
                                      <img src="@/assets/imagenes/flow.svg" width="180px;" />
                                    </div>

                                    <p style="font-size: 13px">
                                      Pago con Flow
                                    </p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 d-flex justify-content-end p-5">

                      <template v-if="this.isLoading">
                      
                        <button class="btn btn-primary" type="button" disabled>
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Espere...
                        </button>

                      </template>

                      <template v-else>

                        <button type="submit" class="btn btn-primary">
                          Continuar
                        </button>

                      </template>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
