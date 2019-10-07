<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <Shop :products="products" class="w-75"></Shop>
    </transition>
    <transition name="right" appear>
      <Cart :cart="cart" class="w-25"></Cart>
    </transition>
  </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
  components: {
      Shop,
      Cart
  },
  computed: {
    ...mapState('products', {
      products: 'datas'
    }),
    ...mapState('cart', {
      cart: 'datas'
    })
  },
  created() {
    this.$store.dispatch('product/fetchDatas');
  }
};
</script>

<style scoped>

@keyframes fromleft {
  from {
    transform: translate(-20px)
  }
  to {}
}

@keyframes fromright {
  from {
    transform: translate(20px)
  }
  to {}
}

.left-enter-active {
  animation: fromleft 1s;
}

.right-enter-active {
  animation: fromright 1s;
}

</style>
