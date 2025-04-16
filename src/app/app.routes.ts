import { Routes } from '@angular/router';
import { appRoutes } from '@kernel/routes';
import { canActivateAuth } from '@services/auth';

import { SignInForm, SignUpForm } from '@features/auth';

import { Layout } from '@shared/ui/layout/layout';

import { UsersListPage } from '@pages/users-list-page/users-list-page';
import { AuthPage } from '@pages/auth-page/auth-page';
import { UsersPage } from '@pages/user-page/users-page';
import { NotFoundComponent } from '@shared/ui/not-found/not-found.component';
import { EditUserPage } from '@pages/edit-user-page/edit-user-page';
import { ResourcesPage } from '@pages/resources-page/resources-page';

export const routes: Routes = [
    {
        path: appRoutes.home(),
        component: Layout,
        children: [
            { path: appRoutes.home(), component: UsersListPage },
            { path: appRoutes.usersList(), component: UsersListPage },
            { path: appRoutes.resourcesList(), component: ResourcesPage },
            { path: appRoutes.user(), component: UsersPage },
            { path: appRoutes.editUser(), component: EditUserPage },
        ],
        canActivate: [canActivateAuth],
    },
    {
        path: appRoutes.auth(),
        component: AuthPage,
        children: [
            { path: appRoutes.signIn(), component: SignInForm },
            { path: appRoutes.signUp(), component: SignUpForm },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
