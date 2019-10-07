import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// connecter vuex sur vue
Vue.use(Vuex);

// modules
const product = {
	namespaced: true,
	state: {
		datas: [],
	},
	mutations: {
		addMany(state, products) {
			state.datas = products
		}
	},
	actions: {
		fetchDatas(context) {
			axios.get('products.json')
				.then(res => {
					const data = res.data;
					context.commit('addMany', Object.keys(data).map(key => data[ke]))
				});
		}
	}
}

const cart = {
	namespaced: true,
	state: {
		datas: [],
	},
	getters: {
		total(state) {
			return state.datas.reduce((acc, p) => {
				acc += p.price
				return acc;
			}, 0);
		}
	},
	mutations: {
		addOne(state, product) {
			state.datas.push(product);
		},
		deleteOne(state, id) {
			const index = state.datas.findIndex( d => d.id === id);
			state.datas.splice(index, 1);
		}
	}
}

// configurer le store
const store = Vuex.store({
	modules: {
		product,
		cart,
	}
})

export default store;