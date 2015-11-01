var Vue       = require('vue');
var VueRouter = require('vue-router');

Vue.config.debug = true;
Vue.use(VueRouter);

var app = Vue.extend({
    data(){
        return {
            permissions: [
                'view-dashboard',
                'view-users',
                'view-parts',
                'view-vehicles',
                'view-shops'
            ]
        }
    },
    methods: {
        can(permission){
            return this.permissions.indexOf(permission) !== -1;
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