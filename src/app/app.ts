import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorMessageComponent } from '@shared/ui/error-message';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ErrorMessageComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {}
