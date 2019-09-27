<template>
  <div class="d-flex flex-row">
    <Shop class="w-75"></Shop>
    <Cart class="w-25"></Cart>
  </div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
  components: {
      Shop,
      Cart
  }  
};
</script>

<style>
</style>
