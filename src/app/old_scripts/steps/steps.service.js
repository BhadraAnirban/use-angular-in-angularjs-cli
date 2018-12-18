(function () {
    'use strict';
  
    angular
      .module('heroApp')
  
      .service('StepService', stepService);
    /** @ngInject */
    function stepService() {
      var stepsService = {};
      var steps = [
        {
          number: 1,
          title: 'PROFILE_STEP_1',
          state_name: 'createProfile',
          active: false,
          complete: false,
        },
        {
          number: 2,
          title: 'PROFILE_STEP_4',
          state_name: 'createProfile.speciality_and_clinics',
          active: false,
          complete: false,
        },
        {
          number: 3,
          title: 'PROFILE_STEP_2',
          state_name: 'createProfile.education',
          active: false,
          complete: false,
        },
        {
          number: 4,
          title: 'PROFILE_STEP_3',
          state_name: 'createProfile.experience_and_membership',
          active: false,
          complete: false,
        },
        {
          number: 5,
          title: 'PROFILE_STEP_5',
          state_name: 'createProfile.registration',
          active: false,
          complete: false,
        },
      ];
  
      stepsService.steps = steps;
  
      stepsService.setActive = function (number) {
        steps.forEach(function (step, index) {
          if (index < number - 1) {
            step.complete = true;
          }
          step.active = false;
        });
  
        steps[number - 1].active = true;
        return steps;
      };
  
      stepsService.setInactive = function (number) {
  
  
       for(var i=number-1;i<steps.length;i++)
       {
          steps[i].complete =false;
          steps[i].active =false;
       }
       /*
        steps.forEach(function (step, index) {
          if (index < number - 1) {
            step.complete = false;
          }
          step.active = false;
        });
  
        steps[number - 1].active = false;
        */
        return steps;
      };
  
      stepsService.setComplete = function (number) {
        steps[number - 1].complete = true;
  
        if (number === steps.length) {
          steps[number - 1].active = false;
        }
        return steps;
      };
  
      stepsService.setCompleteAll = function () {
        steps.forEach(function (step) {
          step.active = false;
          step.complete = true;
        });
  
        return steps;
      };
  
      stepsService.get = function () {
        return steps;
      };
  
      return stepsService;
    }
  
  })();
  