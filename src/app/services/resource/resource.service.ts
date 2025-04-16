import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ResourceListResopnse } from './resource.model';

@Injectable({
    providedIn: 'root',
})
export class ResourceService {
    http = inject(HttpClient);
    baseUrl = `${environment.API_URL}/unknown`;

    getAllResources(page: number, perPage: number) {
        return this.http.get<ResourceListResopnse>(
            `${this.baseUrl}?page=${page}&per_page=${perPage}`
        );
    }
}
