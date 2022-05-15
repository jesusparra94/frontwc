<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      urlBackend: this.urlBackend,
      venta: "",
    };
  },
  mounted() {
    this.traerInformacion();
  },
  methods: {
    traerInformacion() {
      this.axios
        .get(
          `${this.urlBackend}/api/getventarechazada/${this.$route.params.code}`
        )
        .then((response) => {
          console.log(response);

          if (response.data) {
            this.venta = response.data;
          } else {
            this.$router.push("/");
          }
        });
    },
  },
};
</script>

<template>
  <Nav />

  <section
    class="wrapper image-wrapper bg-image bg-overlay text-white banner-detalles"
  >
    <div class="container pt-16 pt-md-16 pb-10 pb-md-10 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
          <h1 class="display-1 text-white mb-3">Pago Rechazado</h1>
          <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
            Si tienes alguna duda o necesitas ayuda con algunos de nuestros
            servicios puedes contactarnos por diferentes medios.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="wrapper pt-16 pt-md-16 pb-10 pb-md-10 bg-light mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-4 d-flex justify-content-center">
          <div class="col-md-9 card p-3 text-center">
            <div class="row">
              <div class="col-12">
                <i
                  class="fa-solid fa-circle-xmark"
                  style="font-size: 100px; color: rgba(94, 98, 217, 1)"
                ></i>
              </div>
              <div class="col-12 mt-3">
                <div class="card shadow-lg">
                  <div class="card-body mt-2 p-0">
                    <h6>Venta: {{ venta.codigo }}</h6>
                    <div
                      class="row pt-2 px-5 d-flex align-items-center"
                      v-for="(item, i) in venta.detallesventa"
                      :key="i"
                    >
                      <hr class="mb-1 mt-1" />

                      <div class="col-md-7">
                        <h6>
                          {{ item.servicios.glosa }}
                        </h6>
                      </div>

                      <div class="col-md-5">
                        <div style="line-height: 1">
                          <h6 style="font-size: 16px">
                            {{ $filters.currencyUSD(item.precio_pagado) }} CLP
                          </h6>
                        </div>
                      </div>
                    </div>

                    <hr class="mt-5 mb-3" />

                    <div class="row px-5 pb-1">
                      <div class="col-md-6">
                        <h6 class="pt-1"><b>Neto pedido</b></h6>
                      </div>

                      <div class="col-md-6">
                        <h6 class="pt-1 azul-crt">
                          <b>{{ $filters.currencyUSD(venta.neto) }} CLP</b>
                        </h6>
                      </div>
                    </div>

                    <div class="row px-5 pb-1">
                      <div class="col-md-6">
                        <h6 class="pt-1"><b>IVA pedido</b></h6>
                      </div>

                      <div class="col-md-6">
                        <h6 class="pt-1 azul-crt">
                          <b>{{ $filters.currencyUSD(venta.iva) }} CLP</b>
                        </h6>
                      </div>
                    </div>

                    <div class="row px-5 pb-1">
                      <div class="col-md-6">
                        <h6 class="pt-1"><b>Total pedido</b></h6>
                      </div>

                      <div class="col-md-6">
                        <h6 class="pt-1 azul-crt">
                          <b
                            >{{ $filters.currencyUSD(venta.total_peso) }} CLP</b
                          >
                        </h6>
                      </div>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center p-5">
                      <a href="/" class="btn btn-primary">Aceptar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
