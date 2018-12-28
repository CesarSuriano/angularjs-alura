angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {}
    $scope.mensagem = ''
    
    $scope.submeter = function(){
        if($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto)
            .success(function(retorno){
                $scope.mensagem = "Cadastrou brou"
            }).error(function(error){
                $scope.mensagem = "Não foi possível cadastrar a foto"
            })
        }
    }
})