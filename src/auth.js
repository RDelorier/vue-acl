"use strict";

import _ from 'lodash';

class Auth {

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
        this._permissions = permissions || [];
    }

    get permissions(){
        return this._permissions;
    }
    set router(router){
        if(typeof router.beforeEach !== 'function'){
            return;
        }

        router.beforeEach(({to, next}) => {
            if(to.permissions && !this.can(to.permissions)){
                return false;
            }
            next();
        })
    }
}

let auth = new Auth();

Auth.install = function(Vue, {permissions, router}){
    auth.permissions = permissions;
    auth.router = router;

    Vue.prototype.$auth = auth;
};

export default Auth;