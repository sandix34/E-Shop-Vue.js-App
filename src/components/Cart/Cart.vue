<template>
  <Cart-products-list :cart="cart" class="p-3"></Cart-products-list>
</template>

<script>
import CartProductsList from './CartProductsList';
import { eventBus } from '../../main';

export default {
  components: {
    CartProductsList
  },
  data() {
    return {
      cart: []
    }
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on('update:cart', (cart) => {
      this.cart = cart;
    })
  }
 
}
</script>

<style>

</style>
