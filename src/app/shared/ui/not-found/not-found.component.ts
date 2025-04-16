import { Component } from '@angular/core';
import { Title } from '../title/title';
import { Button } from '../button/button';
import { appRoutes } from '@kernel/routes';

@Component({
    selector: 'app-not-found',
    imports: [Title, Button],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
    protected readonly appRoutes = appRoutes;
}
