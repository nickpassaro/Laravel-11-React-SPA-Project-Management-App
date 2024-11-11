import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import { Project } from "@/types/index";

export default function Edit({
    project,
}: {
    project: Project;
}) {
    const { data, setData, processing, errors } = useForm({
        name: project.name,
        description: project.description,
        due_date: project.due_date,
        status: project.status,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data.name);
        console.log(data.description);
        console.log(data.due_date);
        console.log(data.status);

        router.put(route("projects.update", project.id), {
            name: data.name,
            description: data.description,
            due_date: data.due_date,
            status: data.status,
        });
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this project?")) {
            router.delete(route("projects.destroy", project.id));
        }
    };

    const handleCancel = () => {
        router.get(route("projects.show", project.id));
    };

    return (
        <AuthenticatedLayout header="Edit Project">
            <Head title={`Edit Project: ${project.name}`} />

            <PageSectionCard>
                <div className="grid grid-rows-[1fr_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_16rem] lg:grid-cols-[1fr_20rem] gap-4 lg:gap-x-8">
                    <form
                        className="h-full"
                        id="project-form-1"
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="project-name-field"
                            className="dark:text-gray-200"
                        >
                            Project Name
                        </label>
                        <input
                            type="text"
                            className="p-1 mb-4 border text-sm w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                            id="project-name-field"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm">
                                {errors.name}
                            </div>
                        )}

                        <label
                            htmlFor="project-description-field"
                            className="dark:text-gray-200"
                        >
                            Project Description
                        </label>
                        <textarea
                            className="p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 text-sm w-full resize-y h-64"
                            id="project-description-field"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        {errors.description && (
                            <div className="text-red-500 text-sm">
                                {errors.description}
                            </div>
                        )}
                    </form>

                    <form
                        className="h-full grid grid-rows-[auto_auto_auto_auto_auto] grid-cols-1 md:grid-rows-[auto_auto_auto_auto_1fr]"
                        id="project-form-2"
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="project-due-date-field"
                            className="dark:text-gray-200"
                        >
                            Due Date
                        </label>
                        <input
                            type="datetime-local"
                            className="p-1 mb-4 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 text-sm w-full"
                            id="project-due-date-field"
                            value={data.due_date}
                            onChange={(e) =>
                                setData("due_date", e.target.value)
                            }
                        />
                        {errors.due_date && (
                            <div className="text-red-500 text-sm">
                                {errors.due_date}
                            </div>
                        )}

                        <label
                            htmlFor="project-status-field"
                            className="dark:text-gray-200"
                        >
                            Status
                        </label>
                        <select
                            className="p-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 text-sm w-full"
                            id="project-status-field"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        {errors.status && (
                            <div className="text-red-500 text-sm">
                                {errors.status}
                            </div>
                        )}

                        <div className="flex flex-col justify-between items-end">
                            <button
                                type="submit"
                                className="mt-6 mb-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                disabled={processing}
                            >
                                Update Project
                            </button>
                            <div className="flex flex-row-reverse">
                                <button
                                    type="button"
                                    className="ml-4 text-red-500 text-sm underline"
                                    onClick={handleDelete}
                                    disabled={processing}
                                >
                                    Delete Project
                                </button>
                                <button
                                    type="button"
                                    className="ml-4 text-gray-500 text-sm underline"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
