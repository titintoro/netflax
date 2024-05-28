import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideRouter(routes),RouterLink,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
