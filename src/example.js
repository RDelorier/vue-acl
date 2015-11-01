var Vue       = require('vue');
var VueRouter = require('vue-router');
var Auth = require('./auth');

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Auth, { permissions: [
    'view-dashboard',
    'view-users',
    'view-parts',
    'view-vehicles',
    'view-shops'
]});

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

var router = new VueRouter();

router.map({
    '/dashboard' : {
        component: require('./components/dashboard')
    }, '/users'  : {
        component: require('./components/users')
    }, '/parts'  : {
        component: require('./components/parts')
    }, '/vehicles': {
        component: require('./components/vehicles')
    }, '/shops'  : {
        component: require('./components/shops')
    },
});


router.start(app, '#app');