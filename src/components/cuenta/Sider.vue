<template>
    <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-4 pt-md-11">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/cuenta" >
                      <i class="fa-solid fa-server mr-2"></i>
                    Servicios
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/cuenta/factura-pendiente">
                      <i class="fa-solid fa-money-bills"></i>
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