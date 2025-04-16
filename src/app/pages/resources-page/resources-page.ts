import { Component } from '@angular/core';
import { ResourcesListComponent } from '@features/resources-list/containers/resources-list/resources-list.component';
import { Title } from '@shared/ui/title/title';

@Component({
    selector: 'app-resources-page',
    imports: [Title, ResourcesListComponent],
    templateUrl: './resources-page.html',
    styleUrl: './resources-page.scss',
})
export class ResourcesPage {}
