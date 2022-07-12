<template>
    <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-5">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/cuenta" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home align-text-bottom"
                      aria-hidden="true"
                    >
                      <i class="fa-solid fa-server mr-2"></i>
                    </svg>
                    Servicios
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/cuenta/factura-pendiente">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home align-text-bottom"
                      aria-hidden="true"
                    >
                      <i class="fa-solid fa-money-bills"></i>
                    </svg>
                    Factura Pendiente
                  </a>
                </li>
              </ul>

            </div>
          </nav>
</template>

<script lang="ts">
export default {
  
}
</script>