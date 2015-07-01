'use strict';

angular.module('app.config')

.config(function ($routeProvider) {
	
    $routeProvider
      
    	// root path
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })  	

        .otherwise({
            redirectTo: '/'
      	});
})