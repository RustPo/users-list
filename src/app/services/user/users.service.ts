import { HttpClient } from '@angular/common/http';
import { EventEmitter, inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import {
    UpdateUserResponse,
    UserResponse,
    UsersListResopnse,
} from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    http = inject(HttpClient);
    baseUrl = `${environment.API_URL}/users`;

    userEventDeleted = new EventEmitter<number>();

    getUserById(id: number) {
        return this.http.get<UserResponse>(`${this.baseUrl}/${id}`);
    }

    getAllUsers(page: number, perPage: number) {
        return this.http.get<UsersListResopnse>(
            `${this.baseUrl}?page=${page}&per_page=${perPage}`
        );
    }

    updateUser({
        name,
        job,
        userId,
    }: {
        name: string;
        job: string;
        userId: number;
    }) {
        return this.http.put<UpdateUserResponse>(`${this.baseUrl}/${userId}`, {
            name,
            job,
        });
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
