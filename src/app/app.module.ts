import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { angularJSModule } from './angularJS.module';


import { PatientComponent } from './patient/patient.component';
import { DetailsComponent } from './patient/details.component';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

// const routes: NgHybridStateDeclaration = {path: 'user', component: UserComponent};

export function getStepsService($injector) {
  return $injector.get('StepService');
}


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DetailsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot(),
  ],
  entryComponents: [
    PatientComponent,
    DetailsComponent,
  ],
  providers: [
    { provide: 'StepServiceA', deps: ['$injector'], useFactory: getStepsService },
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [angularJSModule.name], { strictDi: true });
  }
}