var Vue = require('vue');

new Vue({
    el: '#app',
    data: {
        permissions:[
            'view-dashboard'
        ]
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