(function () {
  'use strict'; 

  angular
      .module('heroApp')
      .component('newonez', {
          template: '<div><b>newoneZ = {{newoneZCtrl.title}}</b></div>',
          controller: newoneZController,
          controllerAs: 'newoneZCtrl',
          bindings: {},
          require: {}
      });
      // Need to inject the dependency in component / controller
      newoneZController.$inject = ['$scope', '$stateParams'];
      
      function newoneZController($scope, $stateParams){
        var _this = this;
        _this.init = function(){
          _this.title = 'PMKJ ' + $stateParams.id;
        };
        _this.init();
      };
      
})();