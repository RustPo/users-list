import { Routes } from '@angular/router';
import {routes as appRoutes} from './karnel/routes'
import {UsersListPage} from './pages/users-list-page/users-list-page';
import {Layout} from './shared/ui/layout/layout';
import {AuthPage} from './pages/auth-page/auth-page';
import {SignInForm, SignUpForm} from './features/auth';

export const routes: Routes = [
  {path: appRoutes.home(), component: Layout, children: [
      {path: appRoutes.home(), component: UsersListPage},
      {path: appRoutes.usersList(), component: UsersListPage},
    ]},
  {path: appRoutes.auth(), component: AuthPage, children: [
      {path: appRoutes.signIn(), component: SignInForm},
      {path: appRoutes.signUp(), component: SignUpForm},
    ]},
];
