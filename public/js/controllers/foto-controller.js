angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {}
    $scope.mensagem = ''


    if ($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId).success(function (foto) {
            $scope.foto = foto
        })
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {

            if ($scope.formulario.$valid) {
                if ($routeParams.fotoId) {
                    $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function () {
                            $scope.mensagem = "Atualizou"
                            $scope.mensagem = "Foto alterada"
                            $scope.formulario.$setPristine();
                        })
                } else {
                    $http.post('/v1/fotos', $scope.foto)
                        .success(function (retorno) {
                            $scope.mensagem = "Cadastrou brou"
                        }).error(function (error) {
                            $scope.mensagem = "Não foi possível cadastrar a foto"
                            $scope.formulario.$setPristine();
                        })
                }
            }
        }
    }
})