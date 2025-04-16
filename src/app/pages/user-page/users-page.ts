import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '@services/user';

import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@services/error/error.service';
import { NgIf } from '@angular/common';

import { appRoutes } from '@kernel/routes';
import { Title } from '@shared/ui/title/title';
import { Button } from '@shared/ui/button/button';

@Component({
    selector: 'app-users-page',
    imports: [NgIf, Title, Button],
    templateUrl: './users-page.html',
    styleUrl: './users-page.scss',
})
export class UsersPage implements OnInit {
    protected readonly appRoutes = appRoutes;
    id: number;
    fetching = false;
    user: User | undefined;

    router = inject(Router);
    userService = inject(UsersService);
    errorService = inject(ErrorService);

    constructor(private activateRoute: ActivatedRoute) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.fetching = true;
        this.userService
            .getUserById(this.id)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(({ data }) => {
                this.fetching = false;
                this.user = data;
            });
    }

    errorHandler(error: HttpErrorResponse) {
        this.fetching = false;

        if (error.status === 404) {
            this.errorService.handle('User not found');
            this.router.navigate([appRoutes.home()]);
        }

        return throwError(() => error);
    }
}
