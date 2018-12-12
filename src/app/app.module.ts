import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { angularJSModule } from './angularJS.module';


import { PatientComponent } from './patient/patient.component';
import { DetailsComponent } from './patient/details.component';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';




@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DetailsComponent,
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
  providers: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [angularJSModule.name], { strictDi: true });
  }
}