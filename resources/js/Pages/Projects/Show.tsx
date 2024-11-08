import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Project, Task } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Show({
    project,
    tasks,
}: {
    project: Project;
    tasks: Task[];
}) {
    return (
        <AuthenticatedLayout header="Project Details">
            <Head title={`Project Name: ${project.name}`} />
            <PageSectionCard>
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-2">
                    {project.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-300">
                    {project.description}
                </p>
            </PageSectionCard>
            <PageSectionCard noPadding={true} noBg={true} noShadow={true}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 -mb-4 px-4">Tasks:</h2>
            </PageSectionCard>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-3 px-4 sm:px-0">
                {tasks.map((task) => (
                    <PageSectionCard key={task.id}>
                        <p>{task.description}</p>
                        <p>{new Date(task.due_date).toLocaleString()}</p>
                        <p>{task.status}</p>
                        <p>{task.priority}</p>
                        <p>
                            {task.created_by.first_name}{" "}
                            {task.created_by.last_name}
                        </p>
                        <p>
                            {task.assigned_to.first_name}{" "}
                            {task.assigned_to.last_name}
                        </p>
                        <p>
                            {task.updated_by.first_name}{" "}
                            {task.updated_by.last_name}
                        </p>
                        <p>{new Date(task.created_at).toLocaleString()}</p>
                        <p>{new Date(task.updated_at).toLocaleString()}</p>
                    </PageSectionCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
