<script>
import Sider from "@/components/cuenta/Sider.vue";
import Nav from "@/components/cuenta/Nav.vue";
import ContactoSoporte from "@/components/cuenta/ContactoSoporte.vue";

export default {
  components: {
    Sider,
    Nav,
    ContactoSoporte,
  },

  data() {
    return {
      urlBackend: this.urlBackend,
      servicioscontratados: "",
    };
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      this.axios.get(`${this.urlBackend}/api/validartoken`).then(
        (response) => {},
        (error) => {
          localStorage.removeItem("token");
          this.$router.push("/login");
        }
      );
    }

    this.servicios();
  },

  methods: {
    servicios() {
      this.axios.get(`${this.urlBackend}/api/servicoscontratados`).then(
        (response) => {
          console.log(response);

          this.servicioscontratados = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Nav />
      <Sider />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row mt-5 p-1 p-md-5">
          <div class="col-sm-12 col-md-9">
            <div class="card">
              <div class="card-body">
                <h4 class="card-text">Servicios Contratados</h4>

                <div class="row mt-2">
                  <div class="col-12 mb-2">
                    <div class="row " v-for="(item, i) in servicioscontratados" :key="i" >
                      <div class="col-12 mb-2">
                        <h6>Empresa: {{item.nombre}}</h6>
                      </div>

                      <div class="col-12 mb-2" v-for="(item1, j) in item.serviciosempresa" :key="j">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm position-relative w-100 p-0"
                           v-if="item1"
                        >
                          
                          <div class="table-responsive d-none d-sm-none d-md-block">
                            <table class="table table-borderless text-light">
                              <thead>
                                <tr>
                                  <th scope="col">Servicio</th>
                                  <th scope="col">Fecha Renovación</th>
                                  <th scope="col">Acción</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{{item1.glosa}}</td>
                                  <td>{{item1.fecha_renovacion}}</td>
                                  <td>
                                    <a
                                      :href="'https://'+item1.dominio+'/cpanel'"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="btn btn-light btn-sm text-dark"
                                      v-if="item1.productos.categoria_id == 1"
                                    >
                                      Cpanel
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div class="d-md-none d-lg-none d-sm-block">

                            <div class="row">

                              <div class="col-12 col-md-12">

                                <ul class="list-group ">
                                  <li class="list-group-item  d-flex justify-content-between align-items-start align-items-center text-wrap">
                                    Servicio: 
                                    <span class="rounded-pill">{{item1.glosa}}</span>
                                  </li>
                                  <li class="list-group-item  d-flex justify-content-between align-items-start align-items-center text-wrap">
                                    Fecha Renovación:
                                    <span class="rounded-pill">{{item1.fecha_renovacion}}</span>
                                  </li>
                                  <li class="list-group-item  d-flex justify-content-between align-items-start align-items-center text-wrap">
                                    Acción:
                                    <span class="rounded-pill">
                                      <a
                                      :href="'https://'+item1.dominio+'/cpanel'"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="btn btn-light btn-sm text-dark"
                                      v-if="item1.productos.categoria_id == 1"
                                    >
                                      Acceder a Cpanel
                                    </a>
                                    </span>
                                  </li>
                                </ul>

                              </div>

                            </div>

                          </div>

                          <span
                            class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle"
                          >
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactoSoporte />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>

body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

main {
  background: #eee;
  height: 100%;
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.85rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.list-group .list-group-item {
  border:0px!important;
}
.list-group{
  background-color:#FFF!important;
}
</style>
