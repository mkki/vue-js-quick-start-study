// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import UpdatePhoto from './components/UpdatePhoto';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home, name: 'home' },
        { path: '/about', component: About, name: 'about' },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactList,
            children: [
                { path: '/add', name: 'addcontact', component: ContactForm },
                { path: '/update/:no', name: 'updatecontact', component: ContactForm, props: true },
                { path: '/photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true }
            ]
        }
    ]
})

new Vue({
    store,
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})