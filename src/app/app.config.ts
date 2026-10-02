import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      license: 'eyJpZCI6IjFjZDg0NGFkLWM3ZWEtNDJjZC04OWJjLTZlNjZjZTM0MmUzZCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA5MjUwMTIsImV4cCI6MTgyMjQ2MTAxMn0.q8ponloZkGYWWEp6gXQS7UFmUiPmXRmtJm7oA-PnBWBfEQWYl7NlWLnmwKPx72addXHa5GvXFLs6WP7l7dzHDA', 
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
    }),
  ],
};
