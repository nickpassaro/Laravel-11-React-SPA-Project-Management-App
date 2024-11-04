import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Task } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

interface IndexProps {
    tasks: {
        data: Task[];
    };
}

export default function Index({ tasks }: IndexProps) {
    return (
        <AuthenticatedLayout header="All Tasks">
            <Head title="All Tasks" />
            <PageSectionCard className="overflow-x-scroll">
                <table className="border-collapse border-b-2 border-gray-200 dark:border-gray-800 whitespace-nowrap">
                    <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                        <tr>
                            <th className="py-1 px-2">ID</th>
                            <th className="py-1 px-2">Description</th>
                            <th className="py-1 px-2">Due Date</th>
                            <th className="py-1 px-2">Status</th>
                            <th className="py-1 px-2">Priority</th>
                            <th className="py-1 px-2">Created By</th>
                            <th className="py-1 px-2">Assigned To</th>
                            <th className="py-1 px-2">Updated By</th>
                            <th className="py-1 px-2">Project ID</th>
                            <th className="py-1 px-2">Created At</th>
                            <th className="py-1 px-2">Updated At</th>
                        </tr>
                    </thead>
                    <tbody className="dark:text-gray-200">
                        {tasks.data.map((task) => (
                            <tr
                                key={task.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                            >
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.id}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800 max-w-96 text-ellipsis overflow-hidden">
                                    {task.description}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(task.due_date).toLocaleString()}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.status}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.priority}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.created_by.first_name}{" "}
                                    {task.created_by.last_name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.assigned_to.first_name}{" "}
                                    {task.assigned_to.last_name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.updated_by.first_name}{" "}
                                    {task.updated_by.last_name}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {task.project.id}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(task.created_at).toLocaleString()}
                                </td>
                                <td className="p-4 border-x-2 border-gray-200 dark:border-gray-800">
                                    {new Date(task.updated_at).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
