import { EditUserPage } from '@pages/edit-user-page/edit-user-page';

export const appRoutes = {
    auth: () => 'auth',
    signIn: () => 'sign-in',
    signUp: () => 'sign-up',

    authSignIn: () => 'auth/sign-in',
    authSignUp: () => 'auth/sign-up',

    home: () => '',
    usersList: () => 'users-list',
    resourcesList: () => 'resources-list',
    user: () => `users/:id`,
    editUser: () => `users/:id/edit`,

    userPageById: (id: number) => `users/${id}`,
    editUserById: (id: number) => `users/${id}/edit`,
};
