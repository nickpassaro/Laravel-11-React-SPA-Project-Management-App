import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Project } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

interface IndexProps {
    projects: {
        data: Project[];
    };
}

export default function Index({ projects }: IndexProps) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <PageSectionCard className="overflow-x-scroll">
                <table className="border-collapse border-b-2 border-gray-200 dark:border-gray-800 whitespace-nowrap">
                    <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Tasks</th>
                            <th>Created By</th>
                            <th>Updated By</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:text-gray-200">
                        {projects.data.map((project) => (
                            <tr
                                key={project.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                            >
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {project.id}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800 max-w-96 text-ellipsis overflow-hidden">
                                    {project.name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(
                                        project.due_date
                                    ).toLocaleString()}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {project.status}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {project.tasks.length}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {project.created_by.first_name}{" "}
                                    {project.created_by.last_name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {project.updated_by.first_name}{" "}
                                    {project.updated_by.last_name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(
                                        project.created_at
                                    ).toLocaleString()}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(
                                        project.updated_at
                                    ).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
