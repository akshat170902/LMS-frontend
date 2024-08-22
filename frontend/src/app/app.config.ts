import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      toastClass: 'ngx-toastr no-animation', // Custom class to disable animations
      disableTimeOut: false, // Keep timeout enabled (set to true to disable auto-close)
      positionClass: 'toast-top-right', // Set the position of the toast
      closeButton: true, // Show a close button on the toast
      tapToDismiss: true, // Allow dismissing the toast by tapping on it
      newestOnTop: true, // Display new toasts on top
    }),
  ]
};
