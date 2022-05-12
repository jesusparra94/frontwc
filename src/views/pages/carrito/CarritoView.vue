
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
                            :class="[carritoView ? 'btn-primary' : 'btn-soft-primary']"
                        >

                            <img class="rounded-0" src="@/assets/img/svg/cart-plus-solid.svg" width="22" alt="">
                        
                        </span> 
                        
                        <b class="d-none d-md-block d-lg-block">Carrito</b>
                        
                    </h6>

                </div>

                <div class="col-md-3  col-3 col-sm-3">

                    <h6>
                        
                        <span class="icon btn btn-circle btn-lg disabled"
                            :class="[identificacionView ? 'btn-primary' : 'btn-soft-primary']"
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

            <div class="row" v-if="carritoView">

                <div class="col-md-7" v-if="jsoncarro.length>0">
                    
                    <h5 id="topListadoProductos">Listado de productos:</h5>

                    <h6 class="text-danger" v-if="productosconerror" ><b>Verifique sus productos</b></h6>

                    <!-- <div class="root">
                        <h2>Create an Account</h2>
                        <input type="text" placeholder="Email" v-model="email" />
              
                        <input type="password" placeholder="Password" v-model="password.password" />
                    
                        <input type="password" placeholder="Confirm Password" v-model="password.confirm" />
           
                    </div>
                    <button @click="submitForm">Validar</button> -->

                    <div class="card shadow-lg" v-for="(item, i) in jsoncarro" :key="i"  >
                        
                        <div class="card-body p-md-4 p-0" v-if="item.categoria_id==1">

                            <div class="col-md-12 mb-5">

                                <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                    <div class="row" style="width: 100%">
                                    
                                        <div class="col-md-5 col-12 col-sm-12">

                                            <h6 :id="i" >{{item.nombre}}</h6>

                                            <small style="font-size:15px" v-if="item.dominio!=''">dominio: {{item.dominio}}</small>

                                        </div>

                                        <div class="col-md-5 col-8 col-sm-8">
                                            
                                            <h6>Periodo de renovación</h6>

                                            <select class="form-select" v-model="selectperiodo[i].periodo_id" @change="PeriodoItem(i)">

                                                <template  v-for="(item1, j) in item.periodosproducto" :key="j">
                                                
                                                    <option v-if="item1.periodo_id==item.periodo"
                                                            :value="item1.periodo_id"
                                                            :selected="true"
                                                    >
                                                        {{$filters.currencyUSD(item1.precio)}} CLP por {{item1.periodo.periodo}}
                                                    </option>

                                                    <option v-else
                                                            :value="item1.periodo_id"
                                                            :selected="false"
                                                    >
                                                        {{$filters.currencyUSD(item1.precio)}} CLP por {{item1.periodo.periodo}}
                                                    </option>

                                                </template>

                                            </select>

                                        </div>

                                        <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                            <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" :dataid="{i}" @click="eliminarcarro(i)" style="cursor:pointer" width="22" alt="">

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
                                                                class="btn d-flex align-items-center"
                                                                style="
                                                                background-color: #17A4F3;
                                                                color: #f2f3f5;
                                                                font-weight: bold;
                                                                max-height: 40px;"
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

                                                    <small class="text-danger" v-if="mensajeerror[i].dominio" ><b>{{mensajeerror[i].dominio}}</b></small>

                                            </form>

                                            <div class="row mt-3" v-if="dominiosbuscados[i]">

                                                <div class="col-md-12" v-if="statusDominioBuscado[i]">

                                                    <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                            {{dominiobuscado[i]}} está disponible

                                                    </h4>

                                                    <div class="btn_hover0 opc_hover d-flex justify-content-center" 
                                                        :class="{'opc_hover2': domainFirstAdd[i] == true, 'opc_hover' : domainFirstAdd[i] == false }"
                                                    >
                                                        
                                                        
                                                        <div class="item" style="cursor: pointer" @click="addFirstDomain(dominiobuscado[i], i)">
                                                            
                                                            <a
                                                                class="btn-add"
                                                                :class="{'btn-delete': domainFirstAdd[i] == true, 'btn-add' : domainFirstAdd[i] == false }"
                                                                itemn="0"
                                                            >
                                                                            <span class="d-flex align-items-center"
                                                                            :class="{
                                                                            'd-none': domainFirstAdd[i] == true,
                                                                            'd-block': !domainFirstAdd[i]
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
                                                                            :class="{'d-none': domainFirstAdd[i] == true}">
                                                                            
                                                                                <i class="far fa-check-circle"></i>
                                                                
                                                                                <p style="font-size: 11px; line-height: 1">
                                                                                    Comprar ahora
                                                                                </p>

                                                                            </span>

                                                                            <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                            v-if="domainFirstAdd[i]"
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
                                                        v-for="(itemt, t) in dominiosbuscados[i]" :key="t"
                                                >
                                                            
                                                    <div class="row d-flex align-items-center card-newd" v-if="itemt.status=='free' && itemt.domain!==dominiobuscado[t]">
                                                        
                                                        <div class="col-md-6 col-12 col-sm-12">
                                                    
                                                            <h6 class="d-none d-md-block d-lg-block">{{itemt.domain}}</h6>
                                                    
                                                            <h3 class="d-sm-block d-md-none d-lg-none text-center">{{itemt.domain}}</h3>
                                                    
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
                                                                        :class="{'opc_hover2': itemt.agregado == true, 'opc_hover' : itemt.agregado == false }"
                                                                    >
                                                                        <div class="item" style="cursor: pointer">
                                                                            
                                                                        <a
                                                                            class="btn-add"
                                                                            :class="{'btn-delete': itemt.agregado == true, 'btn-add' : itemt.agregado == false }"
                                                                            itemn="0"
                                                                        >
                                                                            <span :class="{
                                                                            'd-none': itemt.agregado == true,
                                                                            'd-block': !itemt.agregado
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
                                                                            @click="addcarro(itemt, i)"
                                                                            :class="{
                                                                            'd-none': itemt.agregado == true
                                                                            }"
                                                                            
                                                            
                                                                            >
                                                                            <i class="far fa-check-circle"></i>
                                                            
                                                                            <p style="font-size: 11px; line-height: 1">
                                                                                Comprar ahora
                                                                            </p>
                                                                            </span>
                                                            
                                                            
                                                                            
                                                                            <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                            v-if="itemt.agregado"
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

                            <!--Registro de dominios independientes-->
                            <div class="col-md-12 mb-5" v-if="item.id_producto==4">

                                <form class="pt-3">

                                    <div class="row mb-3" style="width: 100%">
                                    
                                        <div class="col-md-2 col-2 col-sm-12 d-flex align-items-center">

                                            <h6></h6>

                                        </div>

                                        <div class="col-md-8 col-8 col-sm-8 d-flex justify-content-center align-items-center">

                                            <h3 class="text-center">Busca el dominio que necesitas</h3>

                                        </div>

                                        <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                            <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" @click="eliminarcarro(i)" style="cursor:pointer" width="22" alt="">

                                        </div>

                                    </div>

                                    <div class="row d-flex justify-content-center">

                                        <div class="col-md-6 col-9 col-sm-9 px-md-0 pe-0">
                                        
                                            <div class="form-group">
                                            
                                                <input
                                                class="input__field_dominio"
                                                type="text"
                                                placeholder=" "
                                                :id="formvalores3.dominio"
                                                :name="formvalores3.dominio"
                                                v-model="formvalores3.dominio"
                                                
                                                />
                                        
                                            </div>
                                        
                                        </div>
                                        
                                        <div class="col-md-2 col-3 col-sm-3 px-md-0 ps-0">
                                        
                                            <div class="form-group contenedor-extension-dominio">
                                            
                                                <select
                                                class="input__field_exten"
                                                v-model="formvalores3.ext"
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
                                                class="btn d-flex align-items-center"
                                                style="
                                                background-color: #17A4F3;
                                                color: #f2f3f5;
                                                font-weight: bold;
                                                max-height: 40px;"
                                                @click="buscardominio_page()"
                                            >
                                            Buscar
                                            </button>

                                        </div>

                                    </div>

                                    <!-- <small class="text-danger" v-if="mensajeerror[i].dominio" ><b>{{mensajeerror[i].dominio}}</b></small> -->

                                </form>

                                    <div class="row mt-3" v-if="dominiosbuscados_page">

                                        <div class="col-md-12" v-if="statusDominioBuscado_page">

                                            <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                    {{dominiobuscado_page}} está disponible

                                            </h4>

                                            <div class="btn_hover0 opc_hover d-flex justify-content-center" 
                                                :class="{'opc_hover2': domainFirstAdd_page == true, 'opc_hover' : domainFirstAdd_page == false }"
                                            >
                                                
                                                
                                                <div class="item" style="cursor: pointer" @click="addFirstDomain_page(dominiobuscado_page)">
                                                    
                                                    <a
                                                        class="btn-add"
                                                        :class="{'btn-delete': domainFirstAdd_page == true, 'btn-add' : domainFirstAdd_page == false }"
                                                        itemn="0"
                                                    >
                                                                    <span class="d-flex align-items-center"
                                                                    :class="{
                                                                    'd-none': domainFirstAdd_page == true,
                                                                    'd-block': !domainFirstAdd_page
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
                                                                    :class="{'d-none': domainFirstAdd_page == true}">
                                                                    
                                                                        <i class="far fa-check-circle"></i>
                                                        
                                                                        <p style="font-size: 11px; line-height: 1">
                                                                            Comprar ahora
                                                                        </p>

                                                                    </span>

                                                                    <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                    v-if="domainFirstAdd_page"
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

                                                    {{dominiobuscado_page}} no está disponible

                                            </h4>

                                        </div>                                  

                                    </div>
            
                                    <div class="row" v-if="dominiosbuscados_page">

                                        <div class="col-md-12">

                                            <h5 class="mt-1 text-center titulo-bold" style="font-weight: 600" >

                                                    <u>Tenemos otras opciones para tí</u>

                                            </h5>

                                        </div>

                                        <div
                                                class="col-12 col-sm-12 col-md-12"
                                                v-for="(itemt, t) in dominiosbuscados_page" :key="t"
                                        >
                                                    
                                            <div class="row d-flex align-items-center card-newd" v-if="itemt.status=='free' && itemt.domain!==dominiobuscado_page">
                                                
                                                <div class="col-md-6 col-12 col-sm-12">
                                            
                                                    <h6 class="d-none d-md-block d-lg-block">{{itemt.domain}}</h6>
                                            
                                                    <h3 class="d-sm-block d-md-none d-lg-none text-center">{{itemt.domain}}</h3>
                                            
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
                                                                :class="{'opc_hover2': itemt.agregado == true, 'opc_hover' : itemt.agregado == false }"
                                                            >
                                                                <div class="item" style="cursor: pointer">
                                                                    
                                                                <a
                                                                    class="btn-add"
                                                                    :class="{'btn-delete': itemt.agregado == true, 'btn-add' : itemt.agregado == false }"
                                                                    itemn="0"
                                                                >
                                                                    <span :class="{
                                                                    'd-none': itemt.agregado == true,
                                                                    'd-block': !itemt.agregado
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
                                                                    @click="addcarro(itemt, i)"
                                                                    :class="{
                                                                    'd-none': itemt.agregado == true
                                                                    }"
                                                                    
                                                    
                                                                    >
                                                                    <i class="far fa-check-circle"></i>
                                                    
                                                                    <p style="font-size: 11px; line-height: 1">
                                                                        Comprar ahora
                                                                    </p>
                                                                    </span>
                                                    
                                                    
                                                                    
                                                                    <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                                    v-if="itemt.agregado"
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

                                        <div v-if="loading_page" class="modal-body d-flex justify-content-center mb-5 mt-5">

                                            <div class="spinner-grow text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>

                                        </div>

                                    </div>

                            </div>

                            <div class="col-md-12 mb-5" v-else>

                                <div class="card pt-4 pb-5 d-flex justify-content-center align-items-center">

                                    <div class="row" style="width: 100%">
                                    
                                        <div class="col-md-5 col-12 col-sm-12 d-flex align-items-center">

                                            <h6 :id="i">{{item.producto}}</h6>

                                        </div>

                                        <div class="col-md-5 col-8 col-sm-8 d-flex justify-content-center align-items-center">

                                            {{$filters.currencyUSD(item.precio*(precioDolar+10))}} CLP por 1 año

                                        </div>

                                        <div class="col-md-2 col-2 col-sm-2 d-flex align-items-center">

                                            <img class="rounded-0" src="@/assets/img/svg/trash-can-solid.svg" @click="eliminarcarro(i)" style="cursor:pointer" width="22" alt="">

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                        
                </div>

                <div class="col-md-5 mt-md-0 mt-3" v-if="jsoncarro.length>0">
                    
                    <h5>Detalles del pedido:</h5>

                    <DetallesCarrito :carrito="jsoncarro" :neto="this.totales.neto" :iva="this.totales.iva" :total="this.totales.total" />

                    <hr class="mt-5 mb-3" />

                    <div class="row">

                        <div class="col-md-12 d-flex justify-content-end p-5">

                            <a href="#" class="btn btn-primary" @click="continuaridentificacion()">Continuar</a>

                        </div>

                    </div>

                </div>

                <div class="col-md-12 col-sm-12 col-12" v-else>
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
                            background-color: #17A4F3;
                            color: #f2f3f5;
                            font-weight: bold;
                            "
                        >
                        Agregar productos al Carrito

                        </a>

                        </div>
                    </div>
                    </div>

                </div>
                
            </div>

            <div class="row d-flex justify-content-center" v-if="identificacionView">

                <IdentificacionCarrito/>
                
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