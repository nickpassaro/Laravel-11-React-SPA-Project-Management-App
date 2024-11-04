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
                <table className="border-collapse border-b-2 border-gray-200 dark:border-gray-800 whitespace-nowrap">
                    <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                        <tr>
                            <th className="py-1 px-2">Name</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:text-gray-200">
                        {users.data.map((user) => (
                            <tr
                                key={user.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                            >
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800 max-w-96 text-ellipsis overflow-hidden">
                                    {user.first_name} {user.last_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
