import Vue from 'vue';
import Vuex from 'vuex';

// connecter vuex sur vue
Vue.use(Vuex);

const product = {
    state: {
        datas: [],
    }
}

const cart = {
    state: {
        datas: [],
    }
}

// configurer le store
const store = Vuex.store({
    modules: {
        product,
        cart,
    }
})