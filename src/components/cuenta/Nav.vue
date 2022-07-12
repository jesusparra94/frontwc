<template lang="">
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
      <img
        src="../../assets/imagenes/logoWeb.png"
        class="img-fluid"
        alt="logo"
      />
    </a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" @click="logout()" style="cursor:pointer">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      urlBackend: this.urlBackend,
    };
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
    }

    this.axios.get(`${this.urlBackend}/api/validartoken`).then(
      (response) => {},
      (error) => {
        localStorage.removeItem("token");
        this.$router.push("/login");
      }
    );
  },

  methods: {
    logout() {
      this.axios
        .post(`${this.urlBackend}/api/logout`, [])
        .then((res) => {
          console.log(res);
          if (res.data) {
            localStorage.clear();
            this.$router.push("/login");
          }
        })

        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
