import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout header="Profile">
            <Head title="Profile" />

            <PageSectionCard>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </PageSectionCard>

            <PageSectionCard>
                <UpdatePasswordForm className="max-w-xl" />
            </PageSectionCard>

            <PageSectionCard>
                <DeleteUserForm className="max-w-xl" />
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
