import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Project, Task } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";
import { useState } from "react";

export default function Show({
    project,
    tasks,
    updated_by,
}: {
    project: Project;
    tasks: Task[];
    updated_by: number;
}) {
    const [isEditingProject, setIsEditingProject] = useState(false);

    const handleEditToggle = () => {
        setIsEditingProject(!isEditingProject);
    };

    const handleSave = () => {
        const nameInput = document.getElementById(
            "project-name-field"
        ) as HTMLInputElement;
        const descriptionInput = document.getElementById(
            "project-description-field"
        ) as HTMLTextAreaElement;
        const dueDateInput = document.getElementById(
            "project-due-date-field"
        ) as HTMLInputElement;
        const statusInput = document.getElementById(
            "project-status-field"
        ) as HTMLSelectElement;

        router.put(route("projects.update", project.id), {
            name: nameInput.value,
            description: descriptionInput.value,
            due_date: dueDateInput.value,
            status: statusInput.value,
            updated_by: updated_by,
        });

        handleEditToggle();
    };

    return (
        <AuthenticatedLayout header="Project Details">
            <Head title={`Project Name: ${project.name}`} />

            <div className="flex justify-end gap-x-2">
                <a
                    href="#"
                    className="block text-blue-500 underline px-4 mt-0"
                    onClick={(e) => {
                        e.preventDefault();
                        handleEditToggle();
                    }}
                >
                    {isEditingProject ? "Cancel" : "Edit"}
                </a>

                <button
                    type="button"
                    className={`px-2 py-1 bg-blue-500 text-white rounded-md text-sm ${
                        isEditingProject ? "" : "hidden"
                    }`}
                    id="project-save-button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSave();
                    }}
                >
                    Save
                </button>

                <a
                    href="#"
                    className={`text-red-500 underline px-4 mt-0 ${
                        isEditingProject ? "" : "hidden"
                    }`}
                    id="delete-project"
                    onClick={(e) => {
                        e.preventDefault();
                        if (
                            confirm(
                                "Are you sure you want to delete this project?"
                            )
                        ) {
                            router.delete(
                                route("projects.destroy", project.id)
                            );
                        }
                    }}
                >
                    Delete
                </a>
            </div>

            <PageSectionCard>
                <div className="grid gap-2 lg:grid-rows-[auto_1fr] lg:grid-cols-[1fr_auto] lg:gap-x-8">
                    <div className="grid gap-2 lg:row-span-2 lg:grid-rows-[auto_1fr] lg:border-r-2 lg:pr-4 xl:pr-24 xl:gap-y-8 pb-8 lg:pb-0">
                        <h2
                            className={`text-xl font-bold text-gray-900 dark:text-neutral-100 ${
                                isEditingProject ? "hidden" : ""
                            }`}
                            id="project-name"
                        >
                            {project.name}
                        </h2>
                        <form
                            id="project-form-1"
                            className={`${isEditingProject ? "" : "hidden"}`}
                        >
                            <input
                                type="text"
                                defaultValue={project.name}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full"
                                id="project-name-field"
                            />
                        </form>

                        <p
                            className={`text-sm dark:text-neutral-300 lg:text-base ${
                                isEditingProject ? "hidden" : ""
                            }`}
                            id="project-description"
                        >
                            {project.description}
                        </p>
                        <form
                            id="project-form-2"
                            className={`h-64 ${
                                isEditingProject ? "" : "hidden"
                            }`}
                        >
                            <textarea
                                defaultValue={project.description}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full h-full resize-y"
                                id="project-description-field"
                            />
                        </form>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col-dense lg:grid-rows-4 lg:grid-cols-1 lg:gap-2 lg:border-y-0 lg:self-start">
                        <p
                            className={`text-sm dark:text-neutral-300 ${
                                isEditingProject ? "hidden" : ""
                            }`}
                            id="project-due-date"
                        >
                            Due: {new Date(project.due_date).toLocaleString()}
                        </p>
                        <form
                            id="project-form-3"
                            className={`${isEditingProject ? "" : "hidden"}`}
                        >
                            <input
                                type="datetime-local"
                                defaultValue={(() => {
                                    const dueDate = new Date(project.due_date);
                                    const adjustedDueDate = new Date(
                                        dueDate.getTime() -
                                            dueDate.getTimezoneOffset() * 60000
                                    );
                                    return adjustedDueDate
                                        .toISOString()
                                        .slice(0, 16);
                                })()}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full"
                                id="project-due-date-field"
                            />
                        </form>

                        <p
                            className={`text-sm dark:text-neutral-300 ${
                                isEditingProject ? "hidden" : ""
                            }`}
                            id="project-status"
                        >
                            Status: {project.status}
                        </p>
                        <form
                            id="project-form-4"
                            className={`${isEditingProject ? "" : "hidden"}`}
                        >
                            <select
                                defaultValue={project.status}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full"
                                id="project-status-field"
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </form>

                        <p className="text-sm dark:text-neutral-300">
                            Tasks:{" "}
                            {
                                tasks.filter(
                                    (task) => task.status === "Completed"
                                ).length
                            }
                            /{tasks.length} completed
                        </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col-dense lg:grid-rows-4 lg:grid-cols-1 lg:gap-2 lg:border-y-0 lg:self-end">
                        <p className="text-sm dark:text-neutral-300">
                            Created By: {project.created_by.first_name}{" "}
                            {project.created_by.last_name}
                        </p>
                        <p className="text-sm dark:text-neutral-300">
                            Created At:{" "}
                            {new Date(project.created_at).toLocaleString()}
                        </p>
                        <p className="text-sm dark:text-neutral-300">
                            Updated By: {project.updated_by.first_name}{" "}
                            {project.updated_by.last_name}
                        </p>
                        <p className="text-sm dark:text-neutral-300">
                            Updated At:{" "}
                            {new Date(project.updated_at).toLocaleString()}
                        </p>
                    </div>
                </div>
            </PageSectionCard>

            <PageSectionCard noPadding={true} noBg={true} noShadow={true}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 -mb-4 px-4">
                    Tasks:
                </h2>
            </PageSectionCard>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0 text-sm">
                {tasks.map((task) => (
                    <PageSectionCard key={task.id}>
                        <p className="mb-2">{task.description}</p>
                        <div className="text-xs text-gray-700 space-y-2 mt-6">
                            <div>
                                <p>
                                    Due:{" "}
                                    {new Date(task.due_date).toLocaleString()}
                                    <a
                                        href="#"
                                        className="text-blue-500 underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target =
                                                e.target as HTMLElement;
                                            target.textContent =
                                                target.textContent === "Edit"
                                                    ? "Cancel"
                                                    : "Edit";
                                            const dueDateInput =
                                                document.getElementById(
                                                    `due-date-form-${task.id}`
                                                );
                                            if (dueDateInput) {
                                                dueDateInput.classList.toggle(
                                                    "hidden"
                                                );
                                            }
                                        }}
                                    >
                                        <span className="pl-1">Edit</span>
                                    </a>
                                </p>
                                <form
                                    className="hidden"
                                    id={`due-date-form-${task.id}`}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const dueDateInput =
                                            document.getElementById(
                                                `due-date-input-${task.id}`
                                            ) as HTMLInputElement;
                                        if (dueDateInput) {
                                            router.put(
                                                route("tasks.update", task.id),
                                                {
                                                    due_date:
                                                        dueDateInput.value,
                                                    updated_by: updated_by,
                                                },
                                                {
                                                    onSuccess: () => {
                                                        router.get(
                                                            route(
                                                                "projects.show",
                                                                {
                                                                    project:
                                                                        project.id,
                                                                }
                                                            )
                                                        );
                                                    },
                                                    onError: (error) => {
                                                        console.error(
                                                            "Error updating task:",
                                                            error
                                                        );
                                                    },
                                                }
                                            );
                                        }
                                    }}
                                >
                                    <input
                                        type="datetime-local"
                                        defaultValue={(() => {
                                            const dueDate = new Date(
                                                task.due_date
                                            );
                                            const adjustedDueDate = new Date(
                                                dueDate.getTime() -
                                                    dueDate.getTimezoneOffset() *
                                                        60000
                                            );
                                            return adjustedDueDate
                                                .toISOString()
                                                .slice(0, 16);
                                        })()}
                                        className="mt-2 p-1 border border-gray-300 rounded-md text-sm"
                                        id={`due-date-input-${task.id}`}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 ml-2 px-2 py-1 bg-blue-500 text-white rounded-md text-sm"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>

                            <div className="flex flex-row items-center">
                                <form>
                                    <label
                                        htmlFor={`status-input-${task.id}`}
                                        className="inline flex-grow-0"
                                    >
                                        <span className="pr-1">Status:</span>
                                    </label>
                                    <select
                                        id={`status-input-${task.id}`}
                                        name={`status-input-${task.id}`}
                                        className="inline pl-2 pr-8 py-0 text-xs border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md flex-grow-0"
                                        defaultValue={task.status}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const statusInput =
                                                document.getElementById(
                                                    `status-input-${task.id}`
                                                ) as HTMLInputElement;
                                            if (statusInput) {
                                                router.put(
                                                    route(
                                                        "tasks.update",
                                                        task.id
                                                    ),
                                                    {
                                                        status: statusInput.value,
                                                        updated_by: updated_by,
                                                    },
                                                    {
                                                        onSuccess: () => {
                                                            router.get(
                                                                route(
                                                                    "projects.show",
                                                                    {
                                                                        project:
                                                                            project.id,
                                                                    }
                                                                )
                                                            );
                                                        },
                                                        onError: (error) => {
                                                            console.error(
                                                                "Error updating task:",
                                                                error
                                                            );
                                                        },
                                                    }
                                                );
                                            }
                                        }}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">
                                            In Progress
                                        </option>
                                        <option value="Completed">
                                            Completed
                                        </option>
                                    </select>
                                </form>
                            </div>

                            <div className="flex flex-row items-center">
                                <form>
                                    <label
                                        htmlFor={`priority-input-${task.id}`}
                                        className="inline flex-grow-0"
                                    >
                                        <span className="pr-1">Priority:</span>
                                    </label>
                                    <select
                                        id={`priority-input-${task.id}`}
                                        name={`priority-input-${task.id}`}
                                        className="inline pl-2 pr-8 py-0 text-xs border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md flex-grow-0"
                                        defaultValue={task.priority}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const priorityInput =
                                                document.getElementById(
                                                    `priority-input-${task.id}`
                                                ) as HTMLInputElement;
                                            if (priorityInput) {
                                                router.put(
                                                    route(
                                                        "tasks.update",
                                                        task.id
                                                    ),
                                                    {
                                                        priority:
                                                            priorityInput.value,
                                                        updated_by: updated_by,
                                                    },
                                                    {
                                                        onSuccess: () => {
                                                            router.get(
                                                                route(
                                                                    "projects.show",
                                                                    {
                                                                        project:
                                                                            project.id,
                                                                    }
                                                                )
                                                            );
                                                        },
                                                        onError: (error) => {
                                                            console.error(
                                                                "Error updating task:",
                                                                error
                                                            );
                                                        },
                                                    }
                                                );
                                            }
                                        }}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </form>
                            </div>

                            <p>
                                Created By: {task.created_by.first_name}{" "}
                                {task.created_by.last_name}
                            </p>
                            <p>
                                Updated By: {task.updated_by.first_name}{" "}
                                {task.updated_by.last_name}
                            </p>
                            <p>
                                Created At:{" "}
                                {new Date(task.created_at).toLocaleString()}
                            </p>
                            <p>
                                Updated At:{" "}
                                {new Date(task.updated_at).toLocaleString()}
                            </p>
                        </div>
                    </PageSectionCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
