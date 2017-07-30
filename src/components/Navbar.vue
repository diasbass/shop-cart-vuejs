<template>
  <nav class="navbar navbar-fixed-top navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>        
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <a class="navbar-brand-new" v-link="{ path: '/' }">Livraria Flip</a>
        <ul class="nav navbar-nav navbar-right">
          <li class="mob-show"><a v-link="{ path: '/' }">Home</a></li>
          <li v-link-active><a v-link="{ path: '/cart' }"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
        </ul>        
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>