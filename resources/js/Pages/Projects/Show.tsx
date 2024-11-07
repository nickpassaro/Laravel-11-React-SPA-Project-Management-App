import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Project, Task } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Show({
    project,
    task,
}: {
    project: Project;
    task: Task[];
}) {
    return (
        <AuthenticatedLayout header="Project Details">
            <Head title={`Project Name: ${project.name}`} />
            <PageSectionCard>
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-2">
                    {project.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-300 mb-8">
                    {project.description}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-2">Tasks:</h3>
                {project.tasks.map((task) => (
                    <div key={task.id} className="mt-4">
                        <li className="text-sm text-gray-600 dark:text-neutral-300">
                            {task.description}
                        </li>
                    </div>
                ))}
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
