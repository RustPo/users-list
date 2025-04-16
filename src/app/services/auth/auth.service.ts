import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { AuthRsponse } from './auth.model';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http = inject(HttpClient);
    cookieService = inject(CookieService);
    baseUrl = `${environment.API_URL}`;

    accessToken: string | null = null;

    get isAuth() {
        if (!this.accessToken) {
            this.accessToken = this.cookieService.get('token');
        }
        return !!this.accessToken;
    }

    singIn({ email, password }: { email: string; password: string }) {
        return this.http
            .post<AuthRsponse>(`${this.baseUrl}/login`, { email, password })
            .pipe(
                tap((val) => {
                    this.cookieService.set('token', val.token!);
                    this.accessToken = val.token!;
                })
            );
    }

    singUp({ email, password }: { email: string; password: string }) {
        return this.http
            .post<AuthRsponse>(`${this.baseUrl}/register`, { email, password })
            .pipe(
                tap((val) => {
                    this.cookieService.set('token', val.token!);
                    this.accessToken = val.token!;
                })
            );
    }

    public logout() {
        this.cookieService.delete('token');
        this.accessToken = null;
    }
}
