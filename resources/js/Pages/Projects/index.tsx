import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User, Project } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    project,
}: PageProps<{ auth: User; project: Project[] }>) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
        </AuthenticatedLayout>
    );
}
