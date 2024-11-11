import { Config } from "ziggy-js";

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}

export type Project = {
    id: number;
    name: string;
    description: string;
    due_date: string;
    status: string;
    created_by: User;
    updated_by: User;
    created_at: string;
    updated_at: string;
    tasks: Task[];
};

export type Task = {
    id: number;
    name: string;
    description: string;
    due_date: string;
    status: string;
    priority: string;
    created_by: User;
    updated_by: User;
    project: Project;
    created_at: string;
    updated_at: string;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
