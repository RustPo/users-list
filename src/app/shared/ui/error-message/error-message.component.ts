import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorService } from '@services/error/error.service';

@Component({
    selector: 'app-error-message',
    imports: [AsyncPipe, NgIf],
    templateUrl: './error-message.component.html',
    styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
    constructor(public errorService: ErrorService) {}
}
