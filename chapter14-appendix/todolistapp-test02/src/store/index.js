import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
import state from './state';
import mutations from './mutations'
import actions from './actions'
import es6promise from 'es6-promise'
es6promise.polyfill();

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;