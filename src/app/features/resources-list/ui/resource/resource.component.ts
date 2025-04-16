import { Component, Input } from '@angular/core';
import { Resource } from '@services/resource';

@Component({
    selector: 'app-resource',
    imports: [],
    templateUrl: './resource.component.html',
    styleUrl: './resource.component.scss',
})
export class ResourceComponent {
    @Input() resource!: Resource;
}
