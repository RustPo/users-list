import { Component, inject } from '@angular/core';

import { Title } from '@shared/ui/title/title';
import { Button } from '@shared/ui/button/button';

import { UsersListComponent } from '@features/users-list';
import { LogoutButtonComponent } from '../../features/auth/ui/logout-button/logout-button.component';

@Component({
    selector: 'app-users-list-page',
    imports: [Title, UsersListComponent, LogoutButtonComponent],
    templateUrl: './users-list-page.html',
    styleUrl: './users-list-page.scss',
})
export class UsersListPage {}
