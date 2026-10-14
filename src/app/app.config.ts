import {
  ApplicationConfig,
  inject,
  LOCALE_ID,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {UsersService} from '@/features/profil/services/users.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideAppInitializer(() => inject(UsersService).loadUsers()),
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
};
