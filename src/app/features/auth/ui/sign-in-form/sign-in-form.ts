import { Component, inject } from '@angular/core';

import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { appRoutes } from '@kernel/routes';
import { Router } from '@angular/router';

import { Title } from '@shared/ui/title/title';
import { Button } from '@shared/ui/button/button';
import { AuthService } from '@services/auth';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@services/error/error.service';

@Component({
    selector: 'app-sign-in-form',
    imports: [Title, Button, ReactiveFormsModule],
    templateUrl: './sign-in-form.html',
    styleUrl: './sign-in-form.scss',
})
export class SignInForm {
    protected readonly appRoutes = appRoutes;
    authService = inject(AuthService);
    errorService = inject(ErrorService);
    router = inject(Router);
    fetching = false;

    form = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
    });

    onSubmit(event: Event) {
        if (this.form.valid) {
            this.fetching = true;
            this.authService
                //@ts-ignore
                .singIn(this.form.value)
                .pipe(catchError(this.errorHandler.bind(this)))
                .subscribe((val) => {
                    this.fetching = false;
                    this.errorService.clear();
                    this.router.navigate([appRoutes.home()]);
                });
        }
    }

    errorHandler(error: HttpErrorResponse) {
        this.fetching = false;

        this.errorService.handle(error.error.error);

        return throwError(() => error);
    }
}
