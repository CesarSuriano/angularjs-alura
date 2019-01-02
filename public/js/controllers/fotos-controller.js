angular.module('alurapic').controller('FotosController', function ($scope, $http, recursoFoto) {

    $scope.mensagem = ""

    $scope.filtro = ''
    recursoFoto.query(function (retorno) {
        $scope.fotos = retorno
    }, function (error) {
        alert("Deu erro")
    })

    $scope.remover = function (foto) {
        recursoFoto.delete({ fotoId: foto._id }, function () {
            var indiceFoto = $scope.fotos.indexOf(foto)
            $scope.fotos.splice(indiceFoto, 1)
            $scope.mensagem = "Foto apagada"
        }, function () {
            alert("Deu erro")
        })
    }

})