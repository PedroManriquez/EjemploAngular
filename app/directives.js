(function () {
	var direc = angular.module('directivas-ejemplo',[]);
	direc.directive('miPanel',function(){
		return {
			restric : 'E',
			templateUrl : 'app/views/panel.html'
			
		}
	});
	direc.directive('miPanel',function(){
		return {
			restric : 'A',
			templateUrl : 'app/views/panel.html'
			
		}
	});	
})();
