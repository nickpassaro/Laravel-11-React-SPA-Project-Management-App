import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";

interface MainTableProps {
    type: string;
    columns: string[];
    children: React.ReactNode;
}

export default function MainTable({ type, columns, children }: MainTableProps) {
    const typeHeader = type.toUpperCase();
    return (
        <AuthenticatedLayout header={`All ${typeHeader}`}>
            <Head title={`All ${typeHeader}`} />
            <PageSectionCard className="overflow-x-scroll p-0 sm:p-0 sm:flex sm:justify-start sm:items-center">
                <table className="border-collapse border-x-2 border-b-2 border-gray-200 dark:border-gray-800 whitespace-nowrap">
                    <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                        <tr>
                            {columns.map((column) => (
                                <th key={column} className="py-1 px-2">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {children}
                </table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
