<script>
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
export default {
  data() {
    return {
      v$: useValidate(),
      urlBackend: this.urlBackend,
      submitted: false,
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
      },
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
                        this.$emit('avanzarconfirm', res.data)
                    }

                    console.log(res)

                })
                .catch((error) => {
                    
                    console.log("error", error);
            
                });
        
      }
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
    }
  }
};
</script>

<template>
  <div class="col-md-12">
    <h5>Detalles para facturación:</h5>

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
                          :class="{
                            'is-invalid': submitted && v$.form.rut.$invalid,
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
                            name="comuna"
                          v-model="form.comuna"
                            @change="changeInput()"
                            :class="{
                              'is-invalid':
                                submitted && v$.form.comuna.$invalid,
                            }"
                          >
                            <option selected disabled value="">Comuna</option>
                            <option value="comuna">...</option>
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
                            name="ciudad"
                          v-model="form.ciudad"
                            @change="changeInput()"
                            :class="{
                              'is-invalid':
                                submitted && v$.form.ciudad.$invalid,
                            }"
                          >
                            <option selected disabled value="">Ciudad</option>
                            <option value="cuidad">...</option>
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
                                      <img src="@/assets/img/icon-webpay.png" />
                                    </div>

                                    <p style="font-size: 13px">
                                      Pago con Webpay
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
                      <button type="submit" class="btn btn-primary">
                        Continuar
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
  </div>
</template>
