import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-button',
    imports: [NgClass],
    templateUrl: './button.html',
    styleUrl: './button.scss',
})
export class Button {
    router = inject(Router);
    @Input() variant?: 'primary' | 'destructive' = 'primary';
    @Input() text?: string;
    @Input() type?: 'submit' | 'button';
    @Input() disabled?: boolean;
    @Input() navigateLink?: string;
    @Input() handleClick?: () => void;

    onClick() {
        if (this.handleClick) {
            this.handleClick();
            return;
        }

        if (!this.navigateLink) return;

        this.router.navigate([this.navigateLink]);
    }
}
