import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateUserFormComponent } from '@features/update-user/ui/update-user-form/update-user-form.component';
import { Title } from '@shared/ui/title/title';

@Component({
    selector: 'app-edit-user-page',
    imports: [Title, UpdateUserFormComponent],
    templateUrl: './edit-user-page.html',
    styleUrl: './edit-user-page.scss',
})
export class EditUserPage {
    id: number;
    constructor(private activateRoute: ActivatedRoute) {
        this.id = activateRoute.snapshot.params['id'];
    }
}
