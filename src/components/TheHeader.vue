<template>
  <transition appear>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <img src="../assets/logo.png" alt="logo" width="30" height="30" />
        Vue-Shop
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">Boutique</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>

export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        // fermeture du menu lors d'un click en dehors de l'icône menu
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        })
        // Remplace le javaScript de Bootstrap pour déplier le menu déroulant
        const nav = document.querySelector(`#${ binding.value }`);
        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
          } else {
            nav.classList.add('show');
          }
          e.stopPropagation();
        })
        console.log({ nav });
      }
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}

@keyframes fromtop {
  from {
    transform: translatey(-20px)
  }
  to {}
}

.v-enter-active {
  animation: fromtop 1s;
}

.router-link-active {
  font-weight: bold;
}
</style>