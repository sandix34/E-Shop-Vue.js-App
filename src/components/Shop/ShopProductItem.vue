<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height:150px" :src="product.img">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>

export default {
 data() {
   return {
     product: {
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAEl-o3DlTrkowtkmkS_jleLKgsU2joon0yItwotCm82iMtPZ',
       title: 'MacBook',
       description: 'Il y a de nouvelles raisons de s’éprendre du Mac le plus populaire au monde. Disponible en argent, gris sidéral et or, le nouveau MacBook Air, plus fin et plus léger',
       price: '1500 €'

     }
   }
 }
}
</script>

<style>
.product-container {
  height: 400px;
}

p {
  font-size: 12px;
}
</style>