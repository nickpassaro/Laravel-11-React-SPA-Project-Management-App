import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <AuthenticatedLayout header="All Tasks">
            <Head title="All Tasks" />
        </AuthenticatedLayout>
    );
}
