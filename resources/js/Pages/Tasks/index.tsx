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
                <table className="whitespace-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Created By</th>
                            <th>Assigned To</th>
                            <th>Updated By</th>
                            <th>Project ID</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr
                                key={task.id}
                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                            >
                                <td className="p-4">{task.id}</td>
                                <td className="p-4 max-w-96 text-ellipsis overflow-hidden">
                                    {task.name}
                                </td>
                                <td className="p-4">
                                    {new Date(task.due_date).toLocaleString()}
                                </td>
                                <td className="p-4">{task.status}</td>
                                <td className="p-4">{task.priority}</td>
                                <td className="p-4">
                                    {task.created_by.first_name}{" "}
                                    {task.created_by.last_name}
                                </td>
                                <td className="p-4">
                                    {task.assigned_to.first_name}{" "}
                                    {task.assigned_to.last_name}
                                </td>
                                <td className="p-4">
                                    {task.updated_by.first_name}{" "}
                                    {task.updated_by.last_name}
                                </td>
                                <td className="p-4">{task.project.id}</td>
                                <td className="p-4">
                                    {new Date(task.created_at).toLocaleString()}
                                </td>
                                <td className="p-4">
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
