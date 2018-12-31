angular.module('alurapic').controller('GruposController', function($scope, $http){
    $http.get('v1/grupos').success(function(retorno){
        $scope.grupos = retorno
    })
})