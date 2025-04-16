export type UsersList = User[];

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type UsersListResopnse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UsersList;
};

export type UserResponse = {
    data: User;
};

export type UpdateUserResponse = {
    name: string;
    job: string;
};
