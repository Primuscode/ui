import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './app/core/core.module';

if (environment.production) { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(CoreModule).catch(err => console.error(err));