# Controller and component Instructions

textConsultation is an angularJS component.
PatientComponent, DetailsComponent, are angular 7 component.

# To use PatientComponent in textConsultation, we need to downgread the PatientCompoenent -

.directive(
  'appPatient',
  downgradeComponent({ component: PatientComponent }) as angular.IDirectiveFactory
);

# and use it as a directive inside angularJs component’s html -
<div><b>Text Consultation Component</b><app-patient></app-patient></div>

# Need to import UIRouterUpgradeModule.forRoot() from '@uirouter/angular-hybrid'.

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

# inside package.json -
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



# Build Imformation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
