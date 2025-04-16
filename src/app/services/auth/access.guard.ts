import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { appRoutes } from '@kernel/routes';

export function canActivateAuth() {
    const isLoggedIn = inject(AuthService).isAuth;
    console.log('not logged in');
    if (isLoggedIn) {
        return true;
    }

    return inject(Router).createUrlTree([appRoutes.authSignIn()]);
}
