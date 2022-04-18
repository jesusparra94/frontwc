<template>
  
    <header class="wrapper bg-soft-primary">
      <nav class="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <div class="navbar-brand w-100">
            <router-link to="/">
              <img class="logo-dark" src="@/assets/img/logo.png" srcset="@/assets/img/logo@2x.png 2x" alt="" />
              <img class="logo-light" src="@/assets/img/logo-light.png" srcset="@/assets/img/logo-light@2x.png 2x" alt="" />
            </router-link>
          </div>
          <div class="navbar-collapse offcanvas-nav">

            <!-- <div class="offcanvas-header d-lg-none d-xl-none">
              <a href="./index.html"><img src="@/assets/img/logo-light.png" srcset="@/assets/img/logo-light@2x.png 2x" alt="" /></a>
              <button type="button" class="btn-close btn-close-white offcanvas-close offcanvas-nav-close" aria-label="Close"></button>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#!">Demos</a>
                
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#!">Pages</a>
                
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#!">Projects</a>
                
              </li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#!">Blog</a>
                
              </li>
              <li class="nav-item"><a class="nav-link" href="#!">Blocks</a>
                
              </li>
              <li class="nav-item"><a class="nav-link" href="./docs/index.html">Documentation</a>
                
              </li>
            </ul> -->
  
          </div>
      
          <div class="navbar-other w-100 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">

              <li class="nav-item d-none d-md-block">

                <router-link to="/carrito">
                
                  <span class="icon btn btn-circle btn-soft-primary disabled">
                    <img class="rounded-0" src="@/assets/img/svg/cart-plus-solid.svg" width="22" alt="">
                  </span>

                </router-link>
               
              </li>

              <li class="nav-item d-none d-md-block">

                <span class="icon btn btn-circle btn-soft-primary disabled">
                   <img class="rounded-0" src="@/assets/img/svg/user-gear-solid.svg" width="22" alt="">
                </span>

              </li>

            </ul>
          </div>
          <!-- /.navbar-other -->
          <div class="offcanvas-info text-inverse">
            <button type="button" class="btn-close btn-close-white offcanvas-close offcanvas-info-close" aria-label="Close"></button>
            <a href="./index.html"><img src="@/assets/img/logo-light.png" srcset="@/assets/img/logo-light@2x.png 2x" alt="" /></a>
            <div class="mt-4 widget">
              <p>Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.</p>
            </div>
            <!-- /.widget -->
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Contact Info</h4>
              <address> Moonshine St. 14/05 <br /> Light City, London </address>
              <a href="mailto:first.last@email.com">info@email.com</a><br /> +00 (123) 456 78 90
            </div>
            <!-- /.widget -->
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Learn More</h4>
              <ul class="list-unstyled">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <!-- /.widget -->
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Follow Us</h4>
              <nav class="nav social social-white">
                <a href="#"><i class="uil uil-twitter"></i></a>
                <a href="#"><i class="uil uil-facebook-f"></i></a>
                <a href="#"><i class="uil uil-dribbble"></i></a>
                <a href="#"><i class="uil uil-instagram"></i></a>
                <a href="#"><i class="uil uil-youtube"></i></a>
              </nav>
              <!-- /.social -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.offcanvas-info -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>

</template>