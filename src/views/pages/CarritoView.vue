<script setup lang="ts">
import Nav from '@/components/Nav2.vue'

import Footer from '@/components/Footer.vue'

</script>

<template>
    <Nav />
           
        <section class="wrapper bg-light">
            <div class="container pt-5 pb-5">
                <div class="row process-wrapper line">

                    <div class="col-md-3">
                        <h6><span class="icon btn btn-circle btn-lg btn-primary disabled"><img class="rounded-0" src="@/assets/img/svg/cart-plus-solid.svg" width="22" alt=""></span> Carrito</h6>
                    </div>

                    <div class="col-md-3">
                        <h6><span class="icon btn btn-circle btn-lg btn-soft-primary disabled"><img class="rounded-0" src="@/assets/img/svg/user-gear-solid.svg" width="22" alt=""></span> Identificación</h6>
                    </div>

                    <div class="col-md-3">
                        <h6><span class="icon btn btn-circle btn-lg btn-soft-primary disabled"><img class="rounded-0" src="@/assets/img/svg/circle-dollar-to-slot-solid.svg" width="22" alt=""></span> Pago</h6>
                    </div>

                    <div class="col-md-3">
                        <h6><span class="icon btn btn-circle btn-lg btn-soft-primary disabled"><img class="rounded-0" src="@/assets/img/svg/circle-check-solid.svg" width="22" alt=""></span> Confirmación</h6>
                    </div>

                </div>
            </div>

        </section>

        <section class="wrapper bg-light mb-5">

            <div class="container">

                <div class="row d-flex justify-content-center">

                    <div class="col-md-6 col-12 col-sm-12">
                        
                        <h5>Inicia sesión con tus datos:</h5>

                        <div class="card shadow-lg">
                            
                            <div class="card-body">

                                <div class="col-md-12 mb-5">

                                    <form>

                                        <div class="mb-3">

                                            <label for="email" class="form-label">Correo electrónico</label>
                                            <input
                                            type="email"
                                            class="form-control"
                                            
                                            placeholder="Ingresa tu correo electrónico"
                                            id="email"
                                            

                                            />
                                            <div class="invalid-feedback" >
                                           
                                            </div>
                                        </div>

                                        <div class="mb-3">

                                            <label for="email" class="form-label">Contraseña</label>
                                            
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Ingresa tu contraseña"
                                                    id="pass"
                                                />

                                                <div class="invalid-feedback" >
                                            
                                                </div>

                                        </div>

                                        </form>

                                        <div class="row">

                                            <div class="col-md-12 d-flex justify-content-end p-2">

                                                <a href="#" class="btn btn-primary">Iniciar Sesión</a>

                                            </div>

                                        </div>

                                </div>

                            </div>

                        </div>
                            
                    </div>
                   
                </div>

                <br><br><br>

                <div class="row">

                    <div class="col-md-7">
                        
                        <h5>Listado de productos:</h5>

                        <div class="card shadow-lg">
                            
                            <div class="card-body">

                                <div class="col-md-12 mb-5">

                                    <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                        <div class="row" style="width: 100%">
                                        
                                            <div class="col-md-5 col-12 col-sm-12 d-flex align-items-center">

                                                <h6>Hosting</h6>

                                            </div>

                                            <div class="col-md-5 col-8 col-sm-8 d-flex justify-content-center align-items-center">
                                                
                                                <select class="form-control selectperiododominio">

                                                    <option value="1" selected>
                                                        1 año 3.500
                                                    </option>

                                                </select>

                                            </div>

                                            <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                                <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" style="cursor:pointer" width="22" alt="">

                                            </div>

                                            <hr class="mt-5 mb-3">

                                            <div class="col-md-12">

                                                <div class="row">

                                                    <div class="col-md-6">

                                                        <div class="form-check">
                                                    
                                                            <input  class="form-check-input" type="radio" name="opcdominio" id="nuevodominio"/>

                                                            <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                                Quiero registrar un nuevo dominio
                                                            </label>
                                                            
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-check">
                                                    
                                                            <input  class="form-check-input" type="radio" name="opcdominio" id="nuevodominio"/>

                                                            <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                                Quiero usar un dominio que ya tengo registrado
                                                            </label>
                                                            
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                        <div class="row">

                                            <div class="col-md-12">

                                                <form class="pt-3">
                                                
                                                    <div class="row">
                                                        
                                                        <div class="col-md-2 d-none d-md-block d-lg-block p-0">
                                                    
                                                            <div class="form-group float-end mt-1">
                                                                <h6>www.&nbsp;</h6>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-5 col-9 col-sm-9 px-0">
                                                    
                                                            <div class="form-group">
                                                            
                                                                <input
                                                                class="input__field_dominio"
                                                                type="text"
                                                                placeholder=" "
                                                                id="dominio"
                                                                />

                                                            </div>

                                                        </div>

                                                        <div class="col-md-2 col-3 col-sm-3 px-0">

                                                            <div class="form-group contenedor-extension-dominio">
                                                            
                                                                <select
                                                                class="input__field_exten"
                                                                formControlName="extension"
                                                                >

                                                                    <option value="cl">.cl</option>

                                                                    <option value="com">.com</option>

                                                                    <option value="net">.net</option>

                                                                    <option value="info">.info</option>

                                                                    <option value="org">.org</option>

                                                                </select>

                                                            </div>

                                                        </div>

                                                        <div class="col-md-2 col-12 col-sm-12 d-flex align-items-center">

                                                            <button
                                                                type="button"
                                                                class="btn"
                                                                style="
                                                                background-color: #005ad2;
                                                                color: #f2f3f5;
                                                                font-weight: bold;
                                                                max-height: 40px;
                                                                font-size: 13px;"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#staticBackdrop"
                                                            >
                                                            Buscar
                                                            </button>

                                                        </div>

                                                        <div class="col-md-12 col-12 text-center">
                                                        
                                                            <small class="text-danger"><b>Debes ingresar algún dominio</b></small>

                                                        </div>

                                                    </div>

                                                </form>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-12 mb-5">

                                    <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                        <div class="row" style="width: 100%">
                                        
                                            <div class="col-md-5 col-12 col-sm-12 d-flex align-items-center">

                                                <h6>Hosting</h6>

                                            </div>

                                            <div class="col-md-5 col-8 col-sm-8 d-flex justify-content-center align-items-center">
                                                
                                                <select class="form-control selectperiododominio">

                                                    <option value="1" selected>
                                                        1 año 3.500
                                                    </option>

                                                </select>

                                            </div>

                                            <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                                <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" style="cursor:pointer" width="22" alt="">

                                            </div>

                                            <hr class="mt-5 mb-3">

                                            <div class="col-md-12">

                                                <div class="row">

                                                    <div class="col-md-6">

                                                        <div class="form-check">
                                                    
                                                            <input  class="form-check-input" type="radio" name="opcdominio" id="nuevodominio"/>

                                                            <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                                Quiero registrar un nuevo dominio
                                                            </label>
                                                            
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-check">
                                                    
                                                            <input  class="form-check-input" type="radio" name="opcdominio" id="nuevodominio"/>

                                                            <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                                Quiero usar un dominio que ya tengo registrado
                                                            </label>
                                                            
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                        <div class="row">

                                            <div class="col-md-12">

                                                <form class="pt-3">
                                                
                                                    <div class="row">
                                                        
                                                        <div class="col-md-2 d-none d-md-block d-lg-block p-0">
                                                    
                                                            <div class="form-group float-end mt-1">
                                                                <h6>www.&nbsp;</h6>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-5 col-9 col-sm-9 px-0">
                                                    
                                                            <div class="form-group">
                                                            
                                                                <input
                                                                class="input__field_dominio"
                                                                type="text"
                                                                placeholder=" "
                                                                id="dominio"
                                                                />

                                                            </div>

                                                        </div>

                                                        <div class="col-md-2 col-3 col-sm-3 px-0">

                                                            <div class="form-group contenedor-extension-dominio">
                                                            
                                                                <select
                                                                class="input__field_exten"
                                                                formControlName="extension"
                                                                >

                                                                    <option value="cl">.cl</option>

                                                                    <option value="com">.com</option>

                                                                    <option value="net">.net</option>

                                                                    <option value="info">.info</option>

                                                                    <option value="org">.org</option>

                                                                </select>

                                                            </div>

                                                        </div>

                                                        <div class="col-md-2 col-12 col-sm-12 d-flex align-items-center">

                                                            <button
                                                                type="button"
                                                                class="btn"
                                                                style="
                                                                background-color: #005ad2;
                                                                color: #f2f3f5;
                                                                font-weight: bold;
                                                                max-height: 40px;
                                                                font-size: 13px;"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#staticBackdrop"
                                                            >
                                                            Buscar
                                                            </button>

                                                        </div>

                                                        <div class="col-md-12 col-12 text-center">
                                                        
                                                            <small class="text-danger"><b>Debes ingresar algún dominio</b></small>

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
   
                    <div class="col-md-5">
                      
                        <h5>Detalles del pedido:</h5>

                        <div class="card shadow-lg">
                            
                            <div class="card-body p-0">

                                <div class="row pt-2 px-5 d-flex align-items-center">
                                
                                    <div class="col-md-7">
                                        
                                        <h6>Plan Hosting básico</h6>

                                    </div>

                                    <div class="col-md-5">

                                        <div style="line-height:1;">

                                            <h6>3.500 CLP</h6>

                                            <small style="text-decoration: line-through">4.500 CLP</small>

                                        </div>

                                    </div>

                                </div>

                                <hr class="mt-5 mb-3" />

                                <div class="row">

                                    <div class="col-md-12 px-4">

                                        <form>

                                            <div class="form-group d-flex justify-content-center">
                                                
                                                <label class="input">
                                                
                                                    <input
                                                        class="input__field"
                                                        style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;max-height:40px"
                                                        type="text"
                                                        placeholder=" "
                                                        id="cupon"
                                                        name="cupon"
                                                        required
                                                    />

                                                    <span class="input__label" style="font-size:12px">Cupón de descuento</span>

                                                </label>

                                                    <button
                                                    type="button"
                                                    class="btn"

                                                    style="
                                                        background-color: #005ad2; color: #f2f3f5; font-weight: bold; border-top-left-radius: 0px; border-bottom-left-radius: 0px;max-height:40px;font-size:13px;
                                                    "
                                                    >
                                                    Aplicar
                                                    </button>

                                            </div>

                                        </form>
                                        
                                    </div>

                                </div>

                                <hr class="mt-5 mb-3" />

                                <div class="row px-5 pb-1">

                                    <div class="col-md-6">

                                        <h6 class=" pt-1"><b>Neto pedido</b></h6>

                                    </div>

                                    <div class="col-md-6">

                                        <h6 class="pt-1 azul-crt"><b>7.500 CLP</b></h6>

                                    </div>

                                </div>

                                <div class="row px-5 pb-1">

                                    <div class="col-md-6">

                                        <h6 class="pt-1"><b>IVA pedido</b></h6>

                                    </div>

                                    <div class="col-md-6">

                                        <h6 class="pt-1 azul-crt"><b>8.750 CLP</b></h6>

                                    </div>

                                </div>

                                <div class="row px-5 pb-1">

                                    <div class="col-md-6">

                                        <h6 class="pt-1"><b>Total pedido</b></h6>

                                    </div>

                                    <div class="col-md-6">

                                        <h6 class="pt-1 azul-crt"><b>89.000 CLP</b></h6>

                                        <small class="">Ahorra 2.600 CLP</small>

                                    </div>

                                </div>

                                <hr class="mt-5 mb-3" />

                                <div class="row">

                                    <div class="col-md-12 d-flex justify-content-end p-5">

                                        <a href="#" class="btn btn-primary">Continuar</a>

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

<style>
.input__field_dominio {

box-sizing: border-box;

display: block;

width: 100%;

max-height: 40px;

border-left: 1px solid #005AD2;

border-top: 1px solid #005AD2;

border-bottom: 1px solid #005AD2;

border-right: none!important;

padding: 10px;

background: transparent;

border-bottom-left-radius: 5px;

border-top-left-radius: 5px;

}
.input__field_dominio:focus{

border: 1px solid #005AD2 !important;

}

.input__field_dominio:not(:-moz-placeholder-shown) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}

.input__field_dominio:not(:-ms-input-placeholder) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}

.input__field_dominio:focus + .input__label, .input__field_dominio:not(:placeholder-shown) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}
.input__field_exten {

box-sizing: border-box;

display: block;

width: 100%;

max-height: 40px;

padding: 10.5px;

background: transparent;

border-bottom-right-radius: 5px;

border-top-right-radius: 5px;

border-top: 1px solid #005AD2 !important;

border-bottom: 1px solid #005AD2 !important;

border-right: 1px solid #005AD2 !important;

border-left: 1px solid #005AD2 !important;

font-weight: bold;

line-height: 1.2;

}
.input__field {

box-sizing: border-box;

display: block;

width: 100%;

padding: 9px;

background: transparent;

/*border-radius: 5px;*/

border: 1px solid #005AD2 !important;

}
.input__field:focus{

border: 1px solid #005AD2 !important;

}
.input {

position: relative;


}
.input__field:not(:-moz-placeholder-shown) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}

.input__field:not(:-ms-input-placeholder) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}

.input__field:focus + .input__label, .input__field:not(:placeholder-shown) + .input__label {

transform: translate(0.25rem, -65%) scale(0.8);

color: #005AD2;

}
.input__label {

position: absolute;

left: 0;

top: 0;

padding: 7px;

margin: 5px;

background: #FFF;

white-space: nowrap;

transform: translate(0, 0);

transform-origin: 0 0;

transition: transform 120ms ease-in;

font-weight: bold;

line-height: 1.2;



}
</style>