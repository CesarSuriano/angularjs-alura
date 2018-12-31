angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.mensagem = ""

    $scope.filtro = ''
    $http.get('v1/fotos').success(function (retorno) {
        $scope.fotos = retorno
    }).error(function (error) {
        alert("Deu erro")
    })

    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto)
                $scope.fotos.splice(indiceFoto, 1)
                $scope.mensagem = "Foto apagada"
            }).error(function () {
                alert("Deu erro")
            })
    }

})