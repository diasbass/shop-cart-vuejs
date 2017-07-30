import NotFound from '../components/errors/404.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'

module.exports = {
  '/': {
    component: Home
  },
  '/cart': {
    component: Cart
  },
  '*': {
    component: NotFound
  }
}
