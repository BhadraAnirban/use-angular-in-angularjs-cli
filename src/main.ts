import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// In the main.ts file mention below code to Import all the js files
declare const require: any;
const context = require.context('./app', true, /\.js$/);
context.keys().forEach((file: any) => {
    try {
        context(file);
    } catch (err) {
        console.log(err, file);
    }
});

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
