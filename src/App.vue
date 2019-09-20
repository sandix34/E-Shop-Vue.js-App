<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-row">
      <Shop class="w-75"></Shop>
      <Cart class="w-25"></Cart>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

export default {
  name: 'app',
  components: {
    TheHeader,
    Shop,
    Cart
  }
}
</script>

<style>

</style>
