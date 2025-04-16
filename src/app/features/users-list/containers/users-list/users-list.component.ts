import { Component, HostListener, inject, OnInit } from '@angular/core';
import { UserComponent } from '../../ui/user/user.component';

import { UsersList } from '@services/user/user.model';
import { UsersService } from '@services/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-users-list',
    imports: [UserComponent, NgIf, NgFor],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
    users: UsersList = [];
    userService = inject(UsersService);
    loading = false;

    page = 1;
    totalPages = 1;
    perPage = 3;

    loadUsers(page: number) {
        if (this.loading || page > this.totalPages) return;

        this.loading = true;
        this.userService
            .getAllUsers(page, this.perPage)
            .subscribe(({ data, total_pages }) => {
                this.users = [...this.users, ...data];
                this.totalPages = total_pages;
                this.loading = false;

                setTimeout(() => {
                    this.checkNeedMoreData();
                }, 100);
            });
    }

    ngOnInit() {
        this.loadUsers(this.page);
        this.userService.userEventDeleted.subscribe((id: number) => {
            this.onUserDeleted(id);
        });
    }

    @HostListener('window:scroll', [])
    onScroll() {
        if (this.loading) return;
        const bottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (bottom) {
            this.page++;
            this.loadUsers(this.page);
        }
    }

    checkNeedMoreData() {
        if (this.loading) return;

        const hasScroll = document.body.scrollHeight > window.innerHeight;
        const hasMore = this.page < this.totalPages;

        if (!hasScroll && hasMore) {
            this.page++;
            this.loadUsers(this.page);
        }
    }

    onUserDeleted(id: number) {
        this.users = this.users.filter((user) => user.id !== id);
    }
}
