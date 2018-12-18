## Inside package.json -
 Add dependencies of @angular/upgrade, @uirouter/angular-hybrid, angular (angular js)

 ## "dependencies": {
    ...
    "@angular/router": "~7.1.0",
    "@angular/upgrade": "^5.2.11",
    "@uirouter/angular-hybrid": "^6.0.2",
    "angular": "1.6.6",
    "bootstrap": "3.3.7",
    "core-js": "^2.5.4",
    "jquery": "^2.2.4",
    "lodash": "4.17.4",
    "moment": "~2.17.1",
    ...
  },

## In app.module.ts, Need to import UIRouterUpgradeModule.forRoot() from '@uirouter/angular-hybrid'.

## Give reference of all .js files to the module, in main.ts

In the main.ts file mention below code to Import all the js files

declare const require: any;
const context = require.context('./app', true, /\.js$/);
context.keys().forEach((file: any) => {
    try {
        context(file);
    } catch (err) {
        console.log(err, file);
    }
});


## Controller and component Instructions

textConsultation, newonez are an angularJS component.
PatientComponent is angular 7 component.

## To use PatientComponent in textConsultation, we need to downgread the PatientCompoenent -

export const angularJSModule = angular.module('heroApp', [uiRouter,upgradeModule.name])
.controller('MainCtrl', function() {
  this.message = 'Hello world PMKJ';
})
.component('textConsultation', {
  template: '<div><newonez></newonez><b>Text Consultation Component</b><app-patient></app-patient></div>',
  controllerAs: 'txtCnsltn',
  bindings: {
    patient: '=?',
    tab: '@',
  }
})
.directive(
  'appPatient',
  downgradeComponent({ component: PatientComponent }) as angular.IDirectiveFactory
);

## and use it as a directive inside angularJs component’s html -
<div><b>Text Consultation Component</b><app-patient></app-patient></div>



Like DetailsComponent, we can use  PatientComponent, directly in the routing as well. Then we need to make it as entry component in the ngModule declaration.


imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot(),
  ],
entryComponents: [
PatientComponent,
DetailsComponent,
]




## In the old js component file, inject the DI -

(function () {
  'use strict';

  angular
      .module('heroApp')
      .component('newonez', {
          template: '<span>newoneZ = {{newoneZCtrl.title}}</span>',
          controller: newoneZController,
          controllerAs: 'newoneZCtrl',
          bindings: {},
          require: {}
      });


    ##  newoneZController.$inject = ['$scope', '$stateParams'];
    // Need to inject the dependency in component / controller using $inject

      function newoneZController($scope, $stateParams){
        var _this = this;
        _this.init = function(){
          _this.title = 'PMKJ ' + $stateParams.id;
        };
        _this.init();
      };

})();


## Use html files as template, so that while build the app, correct path can be found -

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
      ...
})();

## Use angular JS service inside angular component -

### Inside app.module.ts -

export function getStepsService($injector) {
  return $injector.get('StepService');
}

@NgModule({
  ...
  providers: [
    { provide: 'StepServiceA', deps: ['$injector'], useFactory: getStepsService },
  ],
})

### Inside the angular component -

import { Component, OnInit, Inject } from '@angular/core';

 @Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  steps: [];
  constructor(@Inject('StepServiceA') public stepServiceA) {
    this.steps = stepServiceA.steps;
   }
}
