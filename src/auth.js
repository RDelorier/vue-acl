"use strict";

class Auth {

    constructor(options){
        this.options = options;
    }

    can(permission){
        return this.permissions.indexOf(permission) !== -1;
    }

    set permissions(permissions){
        this.options.permissions = permissions;
    }

    get permissions(){
        return this.options.permissions;
    }


}

Auth.install = function(Vue, options){
    Vue.prototype.$auth = new Auth(options)
};

export default Auth;