
<script src="./contacto.js"></script>

<template>
<Nav />


    <section class="wrapper image-wrapper bg-image bg-overlay text-white banner-detalles">
      
        <div class="container pt-16 pt-md-16 pb-10 pb-md-10 text-center">
        
            <div class="row">
        
            <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
        
                <h1 class="display-1 text-white mb-3">Contactanos ahora</h1>
                <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">Si tienes alguna duda o necesitas ayuda con algunos de nuestros servicios puedes contactarnos por diferentes medios.</p>
            
            </div>
        
            </div>
        
        </div>
    
    </section>

    <section class="wrapper bg-light mb-5">

        <div class="container">

            <div class="row d-flex justify-content-center" v-if="!mensajeenviado">

                <div class="col-md-6 mt-4">

                    <div class="row ">

                        <h2 class="azul-crt text-center">Contactanos por Whatsapp</h2>

                        <div class="d-flex align-items-center justify-content-center mb-2">
                            <i style="font-size:40px;" class="fab fa-whatsapp mx-3"></i>
                            <b class="h4">+56 999999999</b>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <img alt="" src="" width="40px" style="border-radius: 20px;" />
                            <b class="mx-2">Santiago, Chile.</b>
                        </div>

                    </div>

                    <div class="row mt-4">

                        <h2 class="azul-crt text-center">Contactanos por e-mail</h2>

                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <i style="font-size:25px;" class="far fa-envelope"></i>
                            <b class="h5 mx-2">soporte@webcompany.cl</b>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <i style="font-size:25px;" class="far fa-envelope"></i>
                            <b class="h5 mx-2">ventas@webcompany.cl</b>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <i style="font-size:25px;" class="far fa-envelope"></i>
                            <b class="h5 mx-2">facturacion@webcompany.cl</b>
                        </div>


                    </div>
                        
                        

                </div>

                <div class="col-md-6 mt-4">

                    <div class="col-md-9 card card-border p-3">

                        <h3 class="text-center">Envianos tu mensaje</h3>

                        <form class="pt-3 pb-5 px-3" id="formulario_contacto">

                            <div class="form-group mb-4">

                                <label class="input">

                                    <input 
                                        class="input__field" 
                                        :class="{
                                            'is-invalid': submitted && v$.form.nombre.$invalid,
                                        }"
                                        type="text" 
                                        placeholder=" " 
                                        id="nombre" 
                                        v-model="form.nombre"
                                        required/>

                                    <span class="input__label">Nombre</span>

                                    <div
                                    class="invalid-feedback"
                                    v-if="submitted && v$.form.nombre.$invalid"
                                    >
                                    El nombre es requerido.
                                    </div>

                                </label>

                            </div>

                            <div class="form-group mb-4">

                                <label class="input">

                                    <input 
                                        class="input__field"
                                        :class="{
                                            'is-invalid': submitted && v$.form.email.$invalid,
                                        }" 
                                        type="email" 
                                        placeholder=" " 
                                        id="email" 
                                        v-model="form.email"
                                        required/>

                                    <span class="input__label">Email</span>
                                    <div
                                    class="invalid-feedback"
                                    v-if="submitted && v$.form.email.$invalid"
                                    >
                                        El email es requerido.
                                    </div>

                                </label>

                            </div>

                            <div class="form-group mb-4">

                                    <div class="input-group">
                                
                                        <div class="input-group-prepend d-flex">

                                            <div class="input-group-text input__field_tele d-flex align-items-center" style="color:#60697b;">
                                            +569
                                            </div>
                                        
                                        </div>
                                

                                        <input 
                                            class="form-control input__field_telefono" 
                                            :class="{
                                                'is-invalid': submitted && v$.form.telefono.$invalid,
                                            }"
                                            type="number" 
                                            placeholder="Móvil" 
                                            id="telefono" 
                                            v-model="form.telefono"
                                            maxlength="8"
                                            required  />

                                    </div>

                                    <div
                                    class="invalid-feedback"
                                    v-if="submitted && v$.form.telefono.$invalid"
                                    >
                                    El teléfono es requerido.
                                    </div>


                            </div>

                            <div class="form-group">

                                <label class="input">

                                    <textarea 
                                        class="input__field mb-3" 
                                        :class="{
                                            'is-invalid': submitted && v$.form.mensaje.$invalid,
                                        }"
                                        type="text" 
                                        rows="3" 
                                        placeholder=" " 
                                        id="mensaje" 
                                        v-model="form.mensaje"
                                        required>
                                    </textarea>

                                    <span class="input__label">Mensaje/Consulta</span>
                                    
                                    <div
                                    class="invalid-feedback"
                                    v-if="submitted && v$.form.mensaje.$invalid"
                                    >
                                    El mensaje/consulta es requerida.
                                    </div>

                                </label>

                            </div>

                            <div class="row mt-3">

                                <div class="col-12">
                                    
                                    <button v-if="btnCargando"  class="btn btn-submit float-right pt-0 pb-0" type="button" style="border-radius: 5px;color:#FFF; background-color:#17A4F3; width: 140px;height: 45px;" >
                                        <div class="spinner-border text-dark" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>

                                    <button v-else @click="submitForm()" class="btn btn-submit float-right pt-0 pb-0" type="button" style="border-radius: 5px;color:#FFF; background-color:#17A4F3; width: 140px;height: 45px;font-size: 18px;" >
                                        Enviar
                                    </button>
                                    
                                </div>

                            </div>

                        </form>

                        </div>

                </div>

            </div>

            <div class="row d-flex justify-content-center" id="TopContacto" v-else>

                <div class="col-md-6 col-sm-12 col-12">

                    <div class="card p-5 mt-5 mb-5">

                        <div class="row">
                            
                            <div class="col-md-12 mb-2 text-center">

                                <h2><b>Hemos recibido tu mensaje</b></h2>
                                <h6>Te contactaremos dentro de poco</h6>

                            </div>

                        </div>
            
                        <div class="row">

                            <div class="col-12 d-flex justify-content-center">
                                <div
                                class="px-3 d-flex justify-content-center align-items-center"
                                style="/*width: 150px;
                                height: 150px;
                                -moz-border-radius: 50%;
                                -webkit-border-radius: 50%;
                                border-radius: 50%;
                                background: #0d4ec3;*/"
                
                                >

                                <i class="fa-solid fa-envelope-open-text" style="color:#7B47CF;font-size:55px;"></i>
                
                                </div>
                
                            </div>

                            <div class="col-12 mt-3 text-center">

                                <a href="/#nuestrosServicios"
                                    class="btn"
                                    style="
                                    background-color: #7B47CF;
                                    color: #f2f3f5;
                                    font-weight: bold;
                                    "
                                >
                                Ver más servicios

                                </a>
                
                            </div>

                        </div>

                    </div>
        
                </div>

            </div>

        </div>

    </section>

    <Footer/>

</template>