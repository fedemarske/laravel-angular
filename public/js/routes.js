'use strict';

angular.module('app.config')

.config(function ($routeProvider) {
	
    $routeProvider
      
    	// root path
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })  	

        .otherwise({
            redirectTo: '/'
      	});
})