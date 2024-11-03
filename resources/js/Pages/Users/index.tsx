import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { User } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

interface IndexProps {
    users: {
        data: User[];
    };
}

export default function Index({ users }: IndexProps) {
    return (
        <AuthenticatedLayout header="All Users">
            <Head title="All Users" />
            <PageSectionCard className="overflow-x-scroll">
                <table className="whitespace-nowrap">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user) => (
                            <tr
                                key={user.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                            >
                                <td className="p-4 max-w-96 text-ellipsis overflow-hidden">
                                    {user.first_name}{" "}{user.last_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
