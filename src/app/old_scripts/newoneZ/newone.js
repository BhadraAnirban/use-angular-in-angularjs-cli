import * as htmlFile from './newone.html';

(function () {
  'use strict';  

  angular
      .module('heroApp')
      .component('newonez', {
          template: htmlFile,
          controller: newoneZController,
          controllerAs: 'newoneZCtrl',
          bindings: {},
          require: {}
      });
      // Need to inject the dependency in component / controller
      newoneZController.$inject = ['$scope', '$stateParams', 'StepService'];
      
      function newoneZController($scope, $stateParams, StepService){
        var _this = this;
        _this.init = function(){
          _this.title = 'PMKJ ' + $stateParams.id;
          _this.steps = StepService.steps;
        };
        _this.init();
      };
      
})();