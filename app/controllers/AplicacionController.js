(function () {
	var controlador = angular.module('controlador-aplicacion',[]);

	// una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
	// mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
	// bind entre las variables del archivo javascript hacia el DOM
	controlador.controller('AplicacionController', function($scope){
		$scope.ejemplo='Esto es un ejemplo de Angular JS';
	});
})();