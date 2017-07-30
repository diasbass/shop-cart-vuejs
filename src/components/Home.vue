<template>
  <navbar></navbar>
  
  <div class="jumbotron text-center">    
      <product></product>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'
import Navbar from './Navbar'
import Product from './Product'

export default {
  components: {
    Navbar,
    Product
  },
  ready () {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style lang="sass" scoped>
  @import "~assets/scss/bootstrap/variables";
  h1
    color: $brand-success;
    font-weight: 300;

  i.fa-folder-o
    margin-right: 10px;
</style>
