<template>
  <Cart-products-list :cart="cart" class="p-3"></Cart-products-list>
</template>

<script>
import CartProductsList from './CartProductsList';


export default {
  props: ['cart'],
  components: {
    CartProductsList
  },
}
</script>

<style>

</style>
