import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from '../button/button';
import { appRoutes } from '@kernel/routes';
import { LogoutButtonComponent } from '@features/auth/ui/logout-button/logout-button.component';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, Button, LogoutButtonComponent],
    templateUrl: './layout.html',
    styleUrl: './layout.scss',
})
export class Layout {
    appRoutes = appRoutes;
}
