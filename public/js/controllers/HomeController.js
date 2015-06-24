angular.module('app.controllers').controller('HomeController', function($scope, Comment){
    $scope.title = 'Sarasasasasasa';
    
    Comment.get().success(function(data){
        $scope.comentarios = data;
    });
});

