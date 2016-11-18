require('babel-polyfill');
import Vue from 'vue'
import Mint from 'mint-ui'
import Resource from 'vue-resource'
import Router from 'vue-router'
import routerMap from './router'
import App from './App.vue'

Vue.use(Mint);
Vue.use(Router);
Vue.use(Resource);

Vue.config.debug = true;
Vue.config.devtools = true;
// Vue.http.options.emulateJSON = true;
// Vue.http.options.emulateHTTP = true;

// laravel csrf token
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');
const router = new Router({
    history: false,
    mode: 'html5'
});

routerMap(router);

router.start(App, 'body');
