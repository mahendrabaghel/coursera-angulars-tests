(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://msbaghel-assign5-ng.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
