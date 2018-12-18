import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";
import { downgradeComponent } from '@angular/upgrade/static';

import { PatientComponent } from './patient/patient.component';
import { DetailsComponent } from './patient/details.component';

/* declare var angular: angular.IAngularStatic;
import { setAngularJSGlobal } from '@angular/upgrade/static';
setAngularJSGlobal(angular); */



export const angularJSModule = angular.module('heroApp', [uiRouter,upgradeModule.name])
.controller('MainCtrl', function() {
  this.message = 'Hello world PMKJ';
}) 
.component('textConsultation', {
  template: '<div><newone></newone><newonez></newonez><b>Text Consultation Component</b><app-patient></app-patient></div>',
  controllerAs: 'txtCnsltn',
  bindings: {
    patient: '=?',
    tab: '@',
  }
})
.component('newone', {
  template: '<div><b>newone =</b></div>',
  controllerAs: 'nw1',
})
.directive(
  'appPatient',
  downgradeComponent({ component: PatientComponent }) as angular.IDirectiveFactory
);






const routerConfig = ['$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$stateProvider', ($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider) => {
  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

    $stateProvider
    .state({
      name: 'text',
      url: '/text/:id',
      component: 'textConsultation' // AngularJS component or directive name
    })
    .state({
      name: 'patient',
      url: '/patient',
      component: PatientComponent // Angular 7 component or directive name
    })
    .state({
      name: 'details',
      url: '/details',
      component: DetailsComponent // Angular 7 component or directive name
    })
    .state('main', {
      url: '/main'
      , views: {
        '@': {
          template: 'PMKJ In main coltroller : {{ mainCtrl.message }}',
          controller: 'MainCtrl',
          controllerAs: 'mainCtrl',
        }
      }
    });

  $urlRouterProvider.otherwise("/anirban");
}];

angularJSModule.config(routerConfig);
