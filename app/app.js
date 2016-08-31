
(function(){
	// declaramos una variable llama app que importará los módulos de angular para nuestra ng-app declarada en 
	// nuestro archivo index.html
	var app= angular.module("aplicacion",[]);

	// una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
	// mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
	// bind entre las variables del archivo javascript hacia el DOM
	app.controller("AplicacionController", function($scope){
		$scope.ejemplo="Esto es un ejemplo de Angular JS";
	});

})();