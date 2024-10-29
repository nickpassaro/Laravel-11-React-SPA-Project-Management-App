import PageSectionCard from "@/Components/PageSectionCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout header="Dashboard">
            <Head title="Dashboard" />

            <PageSectionCard>
                <div className="text-gray-900 dark:text-gray-100">
                    You're logged in!
                </div>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
