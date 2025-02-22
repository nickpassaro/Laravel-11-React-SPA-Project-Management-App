import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        due_date: "",
        status: "Pending",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("projects.store"));
    };

    return (
        <AuthenticatedLayout header="Create Project">
            <Head title="Create Project" />

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
                        className="h-full"
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

                        <button
                            type="submit"
                            className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            disabled={processing}
                        >
                            Create Project
                        </button>
                    </form>
                </div>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
