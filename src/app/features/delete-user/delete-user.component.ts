import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ErrorService } from '@services/error/error.service';
import { UsersService } from '@services/user';
import { Button } from '@shared/ui/button/button';
import { catchError, throwError } from 'rxjs';

@Component({
    selector: 'app-delete-user',
    imports: [Button],
    templateUrl: './delete-user.component.html',
    styleUrl: './delete-user.component.scss',
})
export class DeleteUserComponent {
    @Input() id!: number;

    fetching = false;

    userService = inject(UsersService);
    errorService = inject(ErrorService);

    handleDelete() {
        this.errorService.clear();
        this.fetching = true;
        this.userService
            .deleteUser(this.id)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(() => {
                this.fetching = false;
                this.userService.userEventDeleted.emit(this.id);
            });
    }

    errorHandler(error: HttpErrorResponse) {
        this.fetching = false;

        this.errorService.handle(error.error.error);

        return throwError(() => error);
    }
}
