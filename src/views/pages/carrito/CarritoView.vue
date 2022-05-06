
<script src="./carrito.js"></script>

<template>
<Nav />


    <section class="wrapper image-wrapper bg-image bg-overlay text-white banner-detalles">
      
        <div class="container pt-16 pt-md-16 pb-10 pb-md-10 text-center">
        
            <div class="row">
        
            <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
        
                <h1 class="display-1 text-white mb-3">Carrito de compras</h1>
                <p class="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">We are a creative company that focuses on establishing long-term relationships with customers.</p>
            
            </div>
        
            </div>
        
        </div>
    
    </section>
           
    <section class="wrapper bg-light">
        <div class="container pt-5 pb-5">
            <div class="row process-wrapper line">

                <div class="col-md-3 col-3 col-sm-3">

                    <h6>

                        <span class="icon btn btn-circle btn-lg disabled"
                            :class="[carrito ? 'btn-primary' : 'btn-soft-primary']"
                        >

                            <img class="rounded-0" src="@/assets/img/svg/cart-plus-solid.svg" width="22" alt="">
                        
                        </span> 
                        
                        <b class="d-none d-md-block d-lg-block">Carrito</b>
                        
                    </h6>

                </div>

                <div class="col-md-3  col-3 col-sm-3">

                    <h6>
                        
                        <span class="icon btn btn-circle btn-lg disabled"
                            :class="[identificacion ? 'btn-primary' : 'btn-soft-primary']"
                        >
                            
                            <img class="rounded-0" src="@/assets/img/svg/user-gear-solid.svg" width="22" alt="">
                            
                        </span> 
                        
                        <b class="d-none d-md-block d-lg-block">Identificación</b>
                        
                    </h6>

                </div>

                <div class="col-md-3  col-3 col-sm-3">
                    <h6>
                        <span class="icon btn btn-circle btn-lg disabled"
                        :class="[pago ? 'btn-primary' : 'btn-soft-primary']"
                        >
                            
                            <img class="rounded-0" src="@/assets/img/svg/circle-dollar-to-slot-solid.svg" width="22" alt="">
                            
                        </span> 
                        
                        <b class="d-none d-md-block d-lg-block">Pago</b>
                        
                    </h6>
                </div>

                <div class="col-md-3  col-3 col-sm-3">
                    <h6>
                        <span class="icon btn btn-circle btn-lg disabled"
                        :class="[confirmacion ? 'btn-primary' : 'btn-soft-primary']"
                        >
                            <img class="rounded-0" src="@/assets/img/svg/circle-check-solid.svg" width="22" alt="">
                        </span> 
                        
                        <b class="d-none d-md-block d-lg-block">Confirmación</b>
                    </h6>
                </div>

            </div>
        </div>

    </section>

    <section class="wrapper bg-light mb-5">

        <div class="container">

            <div class="row" v-if="jsoncarro.length>0">

                <div class="col-md-7">
                    
                    <h5>Listado de productos:</h5>

                    <div class="card shadow-lg" v-for="(item, i) in jsoncarro" :key="i"  >
                        
                        <div class="card-body p-md-4 p-0" v-if="item.categoria_id==1">

                            <div class="col-md-12 mb-5">

                                <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                    <div class="row" style="width: 100%">
                                    
                                        <div class="col-md-5 col-12 col-sm-12">

                                            <h6>{{item.nombre}}</h6>

                                            <small style="font-size:15px" v-if="dominioguardado[i]!=''">dominio: {{dominioguardado[i]}}</small>

                                        </div>

                                        <div class="col-md-5 col-8 col-sm-8 d-flex justify-content-center align-items-center">
                                            
                                            <select class="form-control selectperiododominio">

                                                <option value="1" v-for="(item1, j) in item.periodosproducto" :key="j">
                                                    {{item1.periodo.periodo}} {{$filters.currencyUSD(item1.periodo.precio)}}
                                                </option>

                                            </select>

                                        </div>

                                        <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                            <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" @click="eliminarcarro(item)" style="cursor:pointer" width="22" alt="">

                                        </div>

                                        <hr class="mt-5 mb-3">

                                        <div class="col-md-12">

                                            <div class="row">

                                                <div class="col-md-6">

                                                    <div class="form-check">
                                                
                                                        <input  
                                                        
                                                                class="form-check-input" 
                                                                type="radio" 
                                                                :name="'opcdn'+i" 
                                                                :id="'opcdn'+i"
                                                                :checked="domainNew[i]"
                                                                @click="changeOption(i)"
                                                        />

                                                        <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                            Quiero registrar un nuevo dominio
                                                        </label>
                                                        
                                                    </div>

                                                </div>

                                                <div class="col-md-6">

                                                    <div class="form-check">
                                                
                                                        <input  
                                                                class="form-check-input" 
                                                                type="radio" 
                                                                :name="'opcdo'+i" 
                                                                :id="'opcdo'+i"
                                                                :checked="domainOld[i]"
                                                                @click="changeOption(i)"
                                                        />

                                                        <label style="font-size:14px;text-align:center" class="form-check-label label-dominios" for="nuevodominio">
                                                            Quiero usar un dominio que ya tengo registrado
                                                        </label>
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div class="row" style="width: 100%">

                                        <div class="col-md-12">

                                            <form class="pt-3">

                                                    <div class="row d-flex justify-content-center" v-if="domainNew[i]">

                                                        <div class="col-md-6 col-9 col-sm-9 px-md-0 pe-0">
                                                        
                                                            <div class="form-group">
                                                            
                                                                <input
                                                                class="input__field_dominio"
                                                                type="text"
                                                                placeholder=" "
                                                                :id="formvalores[i].dominio"
                                                                :name="formvalores[i].dominio"
                                                                v-model="formvalores[i].dominio"
                                                                />
                                                        
                                                            </div>
                                                        
                                                        </div>
                                                        
                                                        <div class="col-md-2 col-3 col-sm-3 px-md-0 ps-0">
                                                        
                                                            <div class="form-group contenedor-extension-dominio">
                                                            
                                                                <select
                                                                class="input__field_exten"
                                                                v-model="formvalores[i].ext"
                                                                >
                                                                
                                                                    <option disabled value="">...</option>
                                                        
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
                                                                @click="buscardominio(i)"
                                                                v-if="domainNew[i]"
                                                            >
                                                            Buscar
                                                            </button>

                                                        </div>

                                                    </div>

                                                    <div class="row" v-else>
                                                       
                                                        <div class="row d-flex justify-content-center" v-if="dominioguardado[i]==''">

                                                            <div class="col-md-6 col-9 col-sm-9 px-md-0 pe-0">
                                                            
                                                                <div class="form-group">
                                                                
                                                                    <input
                                                                    class="input__field_dominio"
                                                                    type="text"
                                                                    placeholder=" "
                                                                    v-model="formvalores2[i].dominio"
                                                                    />
                                                            
                                                                </div>
                                                            
                                                            </div>
                                                            
                                                            <div class="col-md-2 col-3 col-sm-3 px-md-0 ps-0">
                                                            
                                                                <div class="form-group contenedor-extension-dominio">
                                                                
                                                                    <select
                                                                    class="input__field_exten"
                                                                    v-model="formvalores2[i].ext"
                                                                    >
                                                                    
                                                                        <option disabled value="">...</option>
                                                            
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
                                                                    @click="guardardominio(i)"
                                                                >
                                                                Guardar
                                                                </button>
                                                            
                                                            </div>

                                                        </div>

                                                        <div class="row d-flex justify-content-center" v-else>
                                                            
                                                            <div class="col-md-6 col-9 col-sm-9 px-md-0 pe-0">
                                                            
                                                                <div class="form-group">
                                                                
                                                                    <input
                                                                    class="input__field_dominio"
                                                                    type="text"
                                                                    placeholder=" "
                                                                    id="dominio"
                                                                    v-model="formvalores2[i].dominio"
                                                                    disabled
                                                                    />
                                                            
                                                                </div>
                                                            
                                                            </div>
                                                            
                                                            <div class="col-md-2 col-3 col-sm-3 px-md-0 ps-0">
                                                            
                                                                <div class="form-group contenedor-extension-dominio">
                                                                
                                                                    <select
                                                                    class="input__field_exten"
                                                                    v-model="formvalores2[i].ext"
                                                                    disabled
                                                                    >
                                                                    
                                                                        <option disabled value="">...</option>
                                                            
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
                                                                    @click="cambiardominioguardado(i)"
                                                                >
                                                                Cambiar
                                                                </button>
                                                            
                                                            </div>

                                                        </div>

                                                    </div>

                                            </form>

                                            <div class="row mt-3" v-if="dominiosbuscados[i]">

                                                <div class="col-md-12" v-if="statusDominioBuscado[i]">

                                                    <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                            {{dominiobuscado[i]}} está disponible

                                                    </h4>

                                                    <div class="btn_hover0 opc_hover d-flex justify-content-center" 
                                                        :class="{'opc_hover2': domainFirstAdd == true, 'opc_hover' : domainFirstAdd == false }"
                                                    >
                                                        
                                                        
                                                        <div class="item" style="cursor: pointer" @click="addFirstDomain(dominiobuscado[i])">
                                                            
                                                            <a
                                                                class="btn-add"
                                                                :class="{'btn-delete': domainFirstAdd == true, 'btn-add' : domainFirstAdd == false }"
                                                                itemn="0"
                                                            >
                                                                            <span class="d-flex align-items-center"
                                                                            :class="{
                                                                            'd-none': domainFirstAdd == true,
                                                                            'd-block': !domainFirstAdd
                                                                            }"
                                                                            >

                                                                                <i 
                                                                                    style="font-size: 28px"
                                                                                    class="far fa-plus-square pe-1">
                                                                                </i>

                                                                                Comprar ahora
                                                                                
                                                                                <p
                                                                                    style="
                                                                                    font-size: 11px;
                                                                                    line-height: 1;
                                                                                    visibility: hidden;
                                                                                    "
                                                                                >
                                                                                &nbsp;
                                                                                </p>

                                                                            </span>
                                                            
                                                                            <span class="span-addcard px-1" 
                                                                            :class="{'d-none': domainFirstAdd == true}">
                                                                            
                                                                                <i class="far fa-check-circle"></i>
                                                                
                                                                                <p style="font-size: 11px; line-height: 1">
                                                                                    Comprar ahora
                                                                                </p>

                                                                            </span>

                                                                            <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                            v-if="domainFirstAdd"
                                                                            >
                                                                            <i style="font-size:28px;" class="far fa-check-circle"></i>
                                                                            <p style="font-size:11px;line-height: 1;">Agregado</p>
                                                                            </span>

                                                            </a>

                                                        </div>
                                                        
                                                    </div>

                                                </div>

                                                <div class="col-md-12" v-else>

                                                    <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                            {{dominiobuscado[i]}} no está disponible

                                                    </h4>

                                                </div>                                  

                                            </div>
                   
                                            <div class="row" v-if="dominiosbuscados[i]">

                                                <div class="col-md-12">

                                                    <h5 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                            <u>Tenemos otras opciones para tí</u>

                                                    </h5>

                                                </div>

                                                <div
                                                        class="col-12 col-sm-12 col-md-12"
                                                        v-for="(item, i) in dominiosbuscados[i]" :key="i"
                                                >
                                                            
                                                    <div class="row d-flex align-items-center card-newd" v-if="item.status=='free' && item.domain!==dominiobuscado">
                                                        
                                                        <div class="col-md-6 col-12 col-sm-12">
                                                    
                                                            <h6 class="d-none d-md-block d-lg-block">{{item.domain}}</h6>
                                                    
                                                            <h3 class="d-sm-block d-md-none d-lg-none text-center">{{item.domain}}</h3>
                                                    
                                                        </div>
                                                    
                                                        <div class="col-md-6 col-12 col-sm-12">
                                                        
                                                            <div class="row d-flex align-items-center">
                                                                
                                                                <div class="col-6 col-sm-6 col-md-8 p-0">

                                                                    <div class="precio-dominio-recomendacion float-right">
                                                                        <p style="margin: 5px; text-align: right">
                                                                        <b style="color: #005ad2"> CLP</b><br /><small
                                                                            style="color: #afb0b2"
                                                                            >Por el primer año</small
                                                                        >
                                                                        </p>
                                                                    </div>

                                                                </div>
                                                        
                                                                <div class="col-6 col-sm-6 col-md-4 p-0">

                                                                    <div
                                                                        class="btn_hover0 d-flex justify-content-center"
                                                                        :class="{'opc_hover2': item.agregado == true, 'opc_hover' : item.agregado == false }"
                                                                    >
                                                                        <div class="item" style="cursor: pointer" @click="addcarro(item)">
                                                                            
                                                                        <a
                                                                            class="btn-add"
                                                                            :class="{'btn-delete': item.agregado == true, 'btn-add' : item.agregado == false }"
                                                                            itemn="0"
                                                                        >
                                                                            <span :class="{
                                                                            'd-none': item.agregado == true,
                                                                            'd-block': !item.agregado
                                                                            }">

                                                                            <i 
                                                                                style="font-size: 28px"
                                                                                class="far fa-plus-square">
                                                                            </i>
                                                                            
                                                                            <p
                                                                                style="
                                                                                font-size: 11px;
                                                                                line-height: 1;
                                                                                visibility: hidden;
                                                                                "
                                                                            >
                                                                                &nbsp;
                                                                            </p>
                                                                            </span>
                                                            
                                                                            <span class="span-addcard px-1"
                                                            
                                                                            :class="{
                                                                            'd-none': item.agregado == true
                                                                            }"
                                                                            
                                                            
                                                                            >
                                                                            <i class="far fa-check-circle"></i>
                                                            
                                                                            <p style="font-size: 11px; line-height: 1">
                                                                                Comprar ahora
                                                                            </p>
                                                                            </span>
                                                            
                                                            
                                                                            
                                                                            <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                            v-if="item.agregado"
                                                                            >
                                                                            <i style="font-size:28px;" class="far fa-check-circle"></i>
                                                                            <p style="font-size:11px;line-height: 1;">Agregado</p>
                                                                            </span>
                                                                            
                                                            
                                                            
                                                            
                                                                        </a>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                            
                                                </div>

                                            </div>

                                            <div class="row resultados" style="width:100%;" v-else>

                                                <div v-if="loading[i]" class="modal-body d-flex justify-content-center mb-5 mt-5">

                                                    <div class="spinner-grow text-primary" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="card-body p-md-4 p-0" v-else-if="item.categoria_id==2">

                            <div class="col-md-12 mb-5">

                                <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                    <div class="row" style="width: 100%">
                                    
                                        <div class="col-md-5 col-12 col-sm-12 d-flex align-items-center">

                                            <h6>{{item.producto}}</h6>

                                        </div>

                                        <div class="col-md-5 col-8 col-sm-8 d-flex justify-content-center align-items-center">
                                            
                                            <select class="form-control selectperiododominio">

                                                <option value="1" v-for="(item1, j) in item.periodosproducto" :key="j">
                                                    {{item1.periodo.periodo}} {{$filters.currencyUSD(item1.periodo.precio)}}
                                                </option>

                                            </select>

                                        </div>

                                        <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                            <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" @click="eliminarcarro(item)" style="cursor:pointer" width="22" alt="">

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                        
                </div>

                <div class="col-md-5 mt-md-0 mt-3">
                    
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

                                    <a href="#" class="btn btn-primary" @click="continuaridentificacion()">Continuar</a>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>
                
            </div>

            <div class="row" v-else>

                <div class="col-md-12 col-sm-12 col-12">
                    <div class=" p-5">
                    <div class="row">
                        <div class="col-md-12 mb-2 text-center">
                        <h2><b>Tu Carro esta Vacio</b></h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                        <div
                            class="px-3 d-flex justify-content-center align-items-center"

                        >

                            <i class="fas fa-cart-arrow-down" style="font-size:60px"></i>
                            <span class="badge bg-white" style="position: relative;top: -18px;left: -15px;color:black;font-size:18px;border:0.1px solid #000000;">0</span>

                        </div>

                        </div>
                        <div class="col-12 mt-3 text-center">
                        <a href="/"
                            class="btn"
                            style="
                            background-color: #005ad2;
                            color: #f2f3f5;
                            font-weight: bold;
                            "
                        >
                        Ir a Servicios

                        </a>

                        </div>
                    </div>
                    </div>

                </div>

            </div>

            <div class="row d-flex justify-content-center" v-if="identificacion">

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

                                            <button class="btn btn-primary" @click="continuarpago()">Iniciar Sesión</button>

                                        </div>

                                    </div>

                            </div>

                        </div>

                    </div>
                        
                </div>
                
            </div>

            <div class="row" v-if="pago">

                <div class="col-md-12">
                    
                    <h5>Detalles para facturación:</h5>

                    <div class="card shadow-lg">
                        
                        <div class="card-body">

                            <div class="col-md-12 mb-5">

                                <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                    <div class="row" style="width: 100%">
                                    
                                        <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">

                                            <h6>Datos básicos</h6>

                                        </div>
                                        
                                        <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">

                                            <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
                                                
                                                <div class="messages"></div>

                                                <div class="row gx-4">

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="nombre" type="text" name="nombre" class="form-control" placeholder="Jane" required>
                                                            <label for="nombre">Nombre o Razón social</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="apellido" type="text" name="apellido" class="form-control" placeholder="Doe">
                                                            <label for="apellido">Apellido (opcional)</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="giro" type="text" name="giro" class="form-control" placeholder="Giro" required>
                                                            <label for="giro">Giro (opcional)</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="rut" type="text" name="rut" class="form-control" placeholder="RUT" required>
                                                            <label for="rut">RUT</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required>
                                                            <label for="email">Email </label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="telefono" type="number" name="telefono" class="form-control" placeholder="99999999" required>
                                                            <label for="telefono">Teléfono</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"></div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">

                                                        <div class="form-floating mb-4">
                                                            <input id="direccion" type="text" name="direccion" class="form-control" placeholder="Santiago" required>
                                                            <label for="direccion">Dirección</label>
                                                            <div class="valid-feedback"></div>
                                                            <div class="invalid-feedback"> </div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-3">

                                                        <div class="form-floating mb-4">

                                                            <div class="form-select-wrapper">

                                                                <select class="form-select" id="form-select" name="comuna" required>

                                                                    <option selected disabled value="">Comuna</option>
                                                                    <option value="">...</option>
                                                                
                                                                </select>

                                                                <div class="valid-feedback"></div>
                                                                <div class="invalid-feedback"></div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div class="col-md-3">

                                                        <div class="form-floating mb-4">
                                                            
                                                            <div class="form-select-wrapper">

                                                                <select class="form-select" id="form-select" name="ciudad" required>
                                                                
                                                                <option selected disabled value="">Ciudad</option>
                                                                <option value="">...</option>
                                                                
                                                                </select>

                                                                <div class="valid-feedback"></div>
                                                                <div class="invalid-feedback"></div>
                                                            </div>

                                                        </div>

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
                                    
                                        <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">

                                            <h6>Selecciona tu metodo de pago</h6>

                                        </div>
                                        
                                        <div class="col-md-12 col-12 col-sm-12 d-flex align-items-center">

                                            
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

                                                        <p style="font-size: 13px;">Pago con Webpay</p>

                                                        </label>

                                                    </div>

                                                </div>

                                            </div>    

                                        </div>

    

                                    </div>


                                </div>

                            </div>        

                            <div class="col-md-12 d-flex justify-content-end p-5">

                                <a href="#" class="btn btn-primary" @click="continuarconfirmacion()">Continuar</a>

                            </div>
     

                        </div>

                    </div>
                        
                </div>
                
            </div>

            <div class="row" v-if="confirmacion">

                <div class="d-flex justify-content-center">
                    <div class="col-md-8 mt-md-0 mt-3">
                        
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
                                        
                                        <a href="/" class="btn btn-primary">Finalizar</a>
                    
                                    </div>
                    
                                </div>
                    
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
                
            </div>


        </div>

    </section>

    <Footer/>

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
.card-border{
border: 1px solid transparent!important;
border-color: #D3CFCD!important;
}

</style>