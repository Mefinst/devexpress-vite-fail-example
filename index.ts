import Vue from 'vue'
import Index from './index.vue'
const app = new Vue({
						render: (createElement) => {

							return createElement(Index)
						},
						created() {
						}
					})
app.$mount('#app')