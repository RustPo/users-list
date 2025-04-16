import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from '@kernel/routes';
import { AuthService } from '@services/auth';
import { Button } from '@shared/ui/button/button';

@Component({
    selector: 'app-logout-button',
    imports: [Button],
    templateUrl: './logout-button.component.html',
    styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
    router = inject(Router);
    authService = inject(AuthService);

    logout() {
        console.log('click');

        this.authService.logout();
        this.router.navigate([appRoutes.authSignIn()]);
    }
}
