import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
    Component,
    ElementRef,
    inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ResourceComponent } from '@features/resources-list/ui/resource/resource.component';
import { Resource, ResourceService } from '@services/resource';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-resources-list',
    imports: [ResourceComponent, NgFor, NgIf],
    templateUrl: './resources-list.component.html',
    styleUrl: './resources-list.component.scss',
})
export class ResourcesListComponent implements OnInit {
    resourceService = inject(ResourceService);
    loading = false;

    page = 1;
    totalPages = 1;
    perPage = 3;

    resources = new BehaviorSubject<Resource[]>([]);

    ngOnInit() {
        this.loadResources();
    }

    @ViewChild('anchor', { static: true }) anchor!: ElementRef;

    ngAfterViewInit() {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (this.loading) return;
                this.page++;
                this.loadResources();
            }
        });
        observer.observe(this.anchor.nativeElement);
    }

    loadResources() {
        if (this.loading || this.page > this.totalPages) return;

        this.loading = true;
        this.resourceService
            .getAllResources(this.page, this.perPage)
            .subscribe((res) => {
                const current = this.resources.getValue();
                this.resources.next([...current, ...res.data]);
                this.totalPages = res.total_pages;
                this.loading = false;

                setTimeout(() => this.checkNeedMoreData(), 50);
            });
    }

    checkNeedMoreData() {
        if (this.loading) return;
        const noScroll = document.body.scrollHeight <= window.innerHeight;
        if (noScroll && this.page < this.totalPages) {
            this.page++;
            this.loadResources();
        }
    }
}
