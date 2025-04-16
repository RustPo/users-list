import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { appRoutes } from '@kernel/routes';
import { ErrorService } from '@services/error/error.service';
import { UsersService } from '@services/user';
import { UpdateUserResponse } from '@services/user/user.model';
import { Button } from '@shared/ui/button/button';
import { catchError, throwError } from 'rxjs';

@Component({
    selector: 'app-update-user-form',
    imports: [ReactiveFormsModule, Button, NgIf],
    templateUrl: './update-user-form.component.html',
    styleUrl: './update-user-form.component.scss',
})
export class UpdateUserFormComponent {
    @Input() id!: number;
    protected readonly appRoutes = appRoutes;
    fetching = false;

    userService = inject(UsersService);
    errorService = inject(ErrorService);
    router = inject(Router);

    form = new FormGroup({
        job: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
    });

    onSubmit(event: Event) {
        if (this.form.valid) {
            this.fetching = true;

            this.userService
                // @ts-ignore
                .updateUser({
                    ...this.form.value,
                    userId: this.id,
                })
                .pipe(catchError(this.errorHandler.bind(this)))
                .subscribe((val: UpdateUserResponse) => {
                    this.fetching = false;
                    this.router.navigate([appRoutes.userPageById(this.id)]);
                });
        }
    }

    errorHandler(error: HttpErrorResponse) {
        this.fetching = false;

        this.errorService.handle(error.error.error);

        return throwError(() => error);
    }
}
