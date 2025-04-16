import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@services/user/user.model';
import { Button } from '../../../../shared/ui/button/button';
import { DeleteUserComponent } from '@features/delete-user/delete-user.component';

@Component({
    selector: 'app-user',
    imports: [Button, DeleteUserComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    @Input() user!: User;
}
