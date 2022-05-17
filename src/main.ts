import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// function darkMode () {
//   let body = document.querySelector('body')
//   let mode = body.dataset.mode 
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
