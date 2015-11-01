"use strict";

import _ from 'lodash';

class Auth {

    constructor(options){
        this.options = options;
        this._permissions = options.permissions || [];
    }

    /**
     * Determines if permission is in this.permission
     *
     * @param permission array[string]|string permissions to check for
     * @param strict are all permissions required
     * @returns {boolean}
     */
    can(permission, strict){

        if(!Array.isArray(permission)){
            return this.permissions.indexOf(permission) !== -1;
        }

        return _.intersection(
            this.permissions,
            permission
        ).length >= (strict ? permission.length : 1);
    }

    set permissions(permissions){
        this._permissions = permissions;
    }

    get permissions(){
        return this._permissions;
    }


}

Auth.install = function(Vue, options){
    Vue.prototype.$auth = new Auth(options)
};

export default Auth;