angular.module('minhasDiretivas', []).directive('meuPainel', function(){
    var ddo = {}

    ddo.restrict = "AE"
    ddo.transclude = true

    ddo.scope = {
        titulo: '@'
    }

    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo
}).directive('minhaImagem', function(){
    var ddo = {}

    ddo.restrict = "AE"
    ddo.scope = {
        url: '@',
        //titulo: '@'
    }

    ddo.templateUrl = 'js/directives/minha-imagem.html'
    return ddo;
})