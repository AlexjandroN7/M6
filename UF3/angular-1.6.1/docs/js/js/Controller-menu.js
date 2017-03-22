angular.module('menuApp',[])

  .controller('menuController',function($scope) {

    $scope.menu = {
            primero:['sopa', 'paella', 'calamares'],
            segundo:['carne', 'pescado', 'tortilla'],
            postre:['fruta', 'yogur']
          };
          $scope.updatePlato = function() {
                    if($scope.cambiarPrimero){
                    $scope.menu.primero.push($scope.cambiarPrimero);}
                    if($scope.cambiarSegundo){
                    $scope.menu.segundo.push($scope.cambiarSegundo);}
                    if($scope.cambiarPostre){
                    $scope.menu.postre.push($scope.cambiarPostre);}





                };

  });
