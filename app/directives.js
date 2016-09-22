'use strict';

(function () {
  var direc = angular.module('directivas-ejemplo',[]);

  direc.directive('miPanel1',function(){
    return {
      restric : 'A',
      templateUrl : 'app/views/panel.html'
      
    }
  });
  
  direc.directive('miPanel2',function(){
    return {
      restric : 'E',
      templateUrl : 'app/views/panel.html'
      
    }
  }); 
})();
