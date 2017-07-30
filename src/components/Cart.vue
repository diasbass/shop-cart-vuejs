<template>
  <navbar></navbar>

  <div class="container">
    <h1>Carrinho</h1>
    
    <p class="cart-empty" v-if="total == 0">Você ainda não colocou nada no carrinho!</p>

    <table class="table table-sm" v-else>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="product in products">
          <th scope="row">{{ product.name }}</th>
          <td>{{ product.qtd }}</td>
          <td>{{ product.qtd * product.price }}</td>
          <td>X</td>
        </tr>

        <tr>
          <th colspan="2" scope="row">Total</th>
          <td>{{ total }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    components: {
      Navbar
    },

    head: {
      title: {
        inner: 'Cart'
      }
    },

    data() {
      return {
        products: []
      }
    },

    computed: {
      total() {
        return 0
      }
    }
  }
</script>