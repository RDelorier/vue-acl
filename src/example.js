var Vue       = require('vue');
var VueRouter = require('vue-router');
var Auth = require('./auth');

Vue.config.debug = true;

var app = Vue.extend({
    data(){
        return {
            auth:this.$auth
        }
    },

    ready(){
        window.app = this;
    }
});

Vue.use(VueRouter);

var router = new VueRouter();
router.map({
    '/dashboard' : {
        component: require('./components/dashboard'),
        permissions:'view-dashboard'
    }, '/users'  : {
        component: require('./components/users'),
        permissions:['view-users']
    }, '/parts'  : {
        component: require('./components/parts')
    }, '/vehicles': {
        component: require('./components/vehicles')
    }, '/shops'  : {
        component: require('./components/shops')
    },
});

Vue.use(Auth, { permissions: [
    'view-dashboard',
    'view-users',
    'view-parts',
    'view-vehicles',
    'view-shops'
], router});




router.start(app, '#app');