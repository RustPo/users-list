import { Component, inject } from '@angular/core';
import { appRoutes } from '@kernel/routes';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Button } from '@shared/ui/button/button';
import { Title } from '@shared/ui/title/title';

import { AuthService } from '@services/auth';
import { ErrorService } from '@services/error/error.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-sign-up-form',
    imports: [Button, Title, ReactiveFormsModule],
    templateUrl: './sign-up-form.html',
    styleUrl: './sign-up-form.scss',
})
export class SignUpForm {
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
                .singUp(this.form.value)
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
