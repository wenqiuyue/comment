import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import components from './components'; // 自定义模板
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont';
import './assets/iconfont/iconfont.css';

Vue.use(ElementUI);
Vue.use(components);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
