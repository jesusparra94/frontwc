<script lang="ts">
import Sider from "@/components/cuenta/Sider.vue";
import Nav from "@/components/cuenta/Nav.vue";
import ContactoSoporte from "@/components/cuenta/ContactoSoporte.vue";


export default {
  components: {
    Sider,
    Nav,
    ContactoSoporte
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Nav />
      <Sider />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row mt-5 p-5">
          <div class="col-sm-12 col-md-9">
            <div class="card">
              <div class="card-body">
                <h6 class="card-text">Facturas Pendientes</h6>

                <div class="row mt-2">
                  <div class="col-12 mb-2">
                    <button
                      type="button"
                      class="btn btn-danger btn-sm position-relative w-100 p-0"
                    >
                      <div class="table-responsive">
                        <table class="table table-borderless text-light">
                          <thead>
                            <tr>
                              <th scope="col">Código</th>
                              <th scope="col">Monto</th>
                              <th scope="col">Acción</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>10003</td>
                              <td>{{ $filters.currencyUSD(86000) }}</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-light btn-sm text-dark"
                                >
                                  Pagar
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                    </button>
                  </div>
                  <div class="col-12 mb-2">
                    <button
                      type="button"
                      class="btn btn-danger btn-sm position-relative w-100 p-0"
                    >
                      <div class="table-responsive">
                        <table class="table table-borderless text-light">
                          <thead>
                            <tr>
                              <th scope="col">Código</th>
                              <th scope="col">Monto</th>
                              <th scope="col">Acción</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>10002</td>
                              <td>{{ $filters.currencyUSD(86000) }}</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-light btn-sm text-dark"
                                >
                                  Pagar
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </button>
                  </div>
                  <div class="col-12 mb-2">
                    <button
                      type="button"
                      class="btn btn-danger btn-sm position-relative w-100 p-0"
                    >
                      <div class="table-responsive">
                        <table class="table table-borderless text-light">
                          <thead>
                            <tr>
                              <th scope="col">Código</th>
                              <th scope="col">Monto</th>
                              <th scope="col">Acción</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>10001</td>
                              <td> {{ $filters.currencyUSD(86000) }}</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-light btn-sm text-dark"
                                >
                                  Pagar
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        <ContactoSoporte/>

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
  font-size: 0.75rem;
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
</style>
