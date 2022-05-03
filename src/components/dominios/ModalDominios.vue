<script>
export default {
  
  data(){
    return {
        listdominios:0
    }
  },
  props: ['dominiosrecomendados','statusdominio','dominiobuscado']
}
</script>

<template>


        <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
  
            <div class="modal-dialog modal-lg">

                <div class="modal-content" >

                    <div class="modal-header" style="border-bottom: 0px; padding-bottom: 0px">
                        
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>

                    </div>

                    <div class="modal-body">
                        
                        <div class="row resultados" v-if="dominiosrecomendados.length>0">

                            <div class="col-md-12 d-flex justify-content-center align-items-center">

                                <div v-if="statusdominio">
                                
                                    <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600"  >

                                        {{dominiobuscado}} está disponible

                                    </h4>

                                    <div class="btn_hover0 d-flex justify-content-center opc_hover" style="width: auto;">
                                        
                                        <div class="item" style="cursor: pointer">
                                        
                                        <a class="btn-add btn-add" itemn="0">
                                            
                                            <span class="d-block">
                                            
                                                <i
                                                    style="font-size: 28px"
                                                    class="fas fa-cart-plus"
                                                ></i>

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

                                            
                                            <span class="span-addcard px-1 d-none">

                                                <i class="far fa-check-circle"></i>

                                                <p style="font-size: 11px; line-height: 1">
                                                    Añadir al carrito
                                                </p>

                                            </span>
<!-- 
                                            <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                *ngIf="dominiopAgregado"
                                            >
                                                <i style="font-size:28px;" class="far fa-check-circle"></i>
                                                <p style="font-size:11px;line-height: 1;">Añadido al carrito</p>
                                            </span> -->
                                        




                                        </a>
                                        </div>
                                    </div>

                                </div>

                                <div v-else>

                                <h4 class="mt-1 text-center titulo-bold" style="font-weight: 600">
                                    <i class="far fa-times-circle" style="color: #c70d00"></i>
                                    {{dominiobuscado}} no está disponible
                                </h4>

                                </div>

                            </div>

                        <div class="col-md-12">
                            <h5 class="mt-1 text-center titulo-bold">
                            Otras opciones disponibles
                            </h5>

                            <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                
                            />
                            </div>
                        </div>

                        <div
                            class="col-12 col-sm-12 col-md-6 d-none d-md-block d-lg-block card-newd"
                        >
                            &nbsp;
                        </div>

                        <div
                            class="col-12 col-sm-12 col-md-6 d-sm-none d-md-block d-lg-block card-newd"
                        >

                            &nbsp;

                        </div>


                            <div
                                    class="col-12 col-sm-12 col-md-6"
                                    v-for="(item, i) in dominiosrecomendados" :key="i"
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
                                            <div class="item" style="cursor: pointer">
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
                                                    class="fas fa-cart-plus"
                                                ></i>
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
                                                    Añadir al carrito
                                                </p>
                                                </span>
                                
                                
                                                
                                                <span class="px-1 d-block" style="padding: 20px 20px;height: 80px;"  
                                                v-if="item.agregado"
                                                >
                                                <i style="font-size:28px;" class="far fa-check-circle"></i>
                                                <p style="font-size:11px;line-height: 1;">Añadido al carrito</p>
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

                        <div class="row resultados" v-else>

                            <div class="modal-body d-flex justify-content-center mb-5 mt-5">

                                <div class="spinner-grow text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>

                            </div>

                        </div>

                        <div class="row">

                            <div class="col-md-12 text-center mt-4">
                                
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    class="btn btn-add-dominio"
                                    style="
                                        background-color: #005ad2;
                                        color: #f2f3f5;
                                        font-weight: bold;
                                        width: 45%;
                                    "
                                >

                                    Continuar

                                </button>

                            </div>

                        </div>

                    </div>

                <!-- <ng-template #preload>

                    <div class="modal-body d-flex justify-content-center mb-5 mt-5">

                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>

                    </div>

                </ng-template> -->



                </div>

            </div>

        </div>

</template>

<style>
.opc_hover{
width: 100%;
}
.opc_hover .item span{
width: 100%;
text-align: center;

}
.opc_hover a {

position: relative;

display: block;

overflow: hidden;

}

.opc_hover a span {

transition: transform 0.2s ease-out;

}


.opc_hover a span:first-child {

display: inline-block;

padding: 20px 20px;
height: 80px;

}

.opc_hover a span:last-child {

position: absolute;

top: 0;

right: 0;

bottom: 0;

left: 0;

padding-right: 15px;

padding-left: 15px;

padding-top: 10px;

text-align: center;

transform: translateY(-200%);

background-color: #005AD2;

color:#FFF;

}

.opc_hover a span:last-child i{

color: #FFF;

}

.opc_hover i {

font-size: 30px;

}

.opc_hover a:hover span:first-child {

transform: translateY(200%);

}

.opc_hover a:hover span:last-child,
.opc_hover[data-animation] a:hover span:last-child {

transform: none;

}




.opc_hover2{
width: 100%;
}
.opc_hover2 .item span{
width: 100%;
text-align: center;
}
.opc_hover2 a {

position: relative;

display: block;

overflow: hidden;

}

.opc_hover2 a span {

transition: transform 0.2s ease-out;

}

.opc_hover2 a span:first-child {

display: inline-block;

padding: 20px 20px;
height: 80px;

}

.opc_hover2 i {

font-size: 30px;

}

.opc_hover2 a:hover span:first-child {

transform: translateY(200%);

}

.opc_hover2 a:hover span:last-child,
.opc_hover2[data-animation] a:hover span:last-child {

transform: none;

}

.card-newd{

box-shadow: rgb(0 0 0 / 2%) 0px 0px 0px 0px, rgb(27 31 35 / 15%) 0px 1px 0px 0px;

}

@media only screen and (max-width: 600px) {
  .carousel-inner{
    margin-top: 60px;
    max-height: 288px!important;
    min-height: 288px!important;
  }
  .title-section{
    font-size: 2rem;
  }
.titulo-bold{
font-weight: bold;
}
.card-newd{

box-shadow: rgb(0 0 0 / 2%) 0px 0px 0px 0px, rgb(27 31 35 / 15%) 0px 1px 0px 0px;
padding-right: 15px;
padding-left: 15px;

}
.label-dominios{
  font-size: 15px!important;
}
.btn-buscar{ margin-top: 5px; }
}
</style>