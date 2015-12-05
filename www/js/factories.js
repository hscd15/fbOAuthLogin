angular.module('starter.factories', [])

.factory('oAuth', function ($auth) {
    var service = {};
    service.isAuthenticated = function () {
        $auth.isAuthenticated();
    }
    
    
    return service;
})