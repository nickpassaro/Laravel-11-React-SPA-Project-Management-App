import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Project, Task } from "@/types/index";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Show({
    project,
    tasks,
}: {
    project: Project;
    tasks: Task[];
}) {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTasks, setEditedTasks] = useState<Task[]>(tasks);

    const handleTaskEditClick = (taskId: number) => {
        setEditingTaskId(taskId);
    };

    const handleTaskInputChange = (
        taskId: number,
        field: string,
        value: string
    ) => {
        const currentDate = new Date().toISOString();

        setEditedTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, [field]: value, updated_at: currentDate }
                    : task
            )
        );
    };

    const handleTaskSave = (taskId: number) => {
        const updatedTask = editedTasks.find((task) => task.id === taskId);

        if (updatedTask) {
            const payload = {
                id: updatedTask.id,
                description: updatedTask.description,
                due_date: updatedTask.due_date,
                status: updatedTask.status,
                priority: updatedTask.priority,
                updated_at: updatedTask.updated_at,
            };

            router.put(route("tasks.update", taskId), payload, {
                onSuccess: () => {
                    setEditingTaskId(null);
                    router.get(route("projects.show", project.id));
                },
                onError: (errors) => {
                    console.error("Failed to update task:", errors);
                },
            });
        }
    };

    const handleTaskCancel = () => {
        setEditedTasks(tasks);
        setEditingTaskId(null);
    };

    const handleTaskCreate = () => {
        const payload = {
            project_id: project.id,
        };

        router.post(route("tasks.store"), payload, {
            onSuccess: () => {
                router.get(route("projects.show", project.id));
            },
            onError: (errors) => {
                console.error("Failed to create task:", errors);
            },
        });
    };

    const handleTaskDelete = (taskId: number) => {
        router.delete(route("tasks.destroy", taskId), {
            onSuccess: () => {
                setEditedTasks((prevTasks) =>
                    prevTasks.filter((task) => task.id !== taskId)
                );
            },
            onError: (errors) => {
                console.error("Failed to delete task:", errors);
            },
        });
    };

    return (
        <AuthenticatedLayout header="Project Details">
            <Head title={`Project Name: ${project.name}`} />

            <div className="flex justify-end mb-4">
                <Link
                    href={route("projects.edit", project.id)}
                    className="text-blue-500 hover:underline mr-4"
                >
                    Edit Project
                </Link>
            </div>

            <PageSectionCard>
                <div className="grid gap-2 lg:grid-rows-[auto_1fr] lg:grid-cols-[1fr_auto] lg:gap-x-8">
                    <div className="grid gap-2 lg:row-span-2 lg:grid-rows-[auto_1fr] lg:border-r-2 lg:pr-4 xl:pr-24 xl:gap-y-8 pb-8 lg:pb-0">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
                            {project.name}
                        </h2>
                        <p className="text-sm dark:text-neutral-300 lg:text-base">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col-dense lg:grid-rows-4 lg:grid-cols-1 lg:gap-2 lg:border-y-0 lg:self-start">
                        <p className="text-sm dark:text-neutral-300">
                            Due: {new Date(project.due_date).toLocaleString()}
                        </p>
                        <p className="text-sm dark:text-neutral-300">
                            Status: {project.status}
                        </p>
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

            <PageSectionCard
                noPadding={true}
                noBg={true}
                noShadow={true}
                className="flex flex-row justify-between items-center"
            >
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 -mb-4 px-4">
                    Tasks:
                </h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
                    onClick={handleTaskCreate}
                >
                    Create Task
                </button>
            </PageSectionCard>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0 text-sm">
                {editedTasks.map((task) => (
                    <PageSectionCard key={task.id}>
                        <div className="space-y-2">
                            {editingTaskId === task.id ? (
                                <textarea
                                    className="p-1 border rounded-md w-full h-32 text-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                                    value={task.description}
                                    onChange={(e) =>
                                        handleTaskInputChange(
                                            task.id,
                                            "description",
                                            e.target.value
                                        )
                                    }
                                />
                            ) : (
                                <p className="mb-0 text-gray-900 dark:text-neutral-100">
                                    {task.description}
                                </p>
                            )}
                        </div>
                        <div className="text-xs text-gray-700 space-y-2 mt-6">
                            <p className="dark:text-neutral-300">
                                Due:{" "}
                                {editingTaskId === task.id ? (
                                    <input
                                        type="datetime-local"
                                        value={task.due_date}
                                        onChange={(e) =>
                                            handleTaskInputChange(
                                                task.id,
                                                "due_date",
                                                e.target.value
                                            )
                                        }
                                        className="border px-2 py-0 rounded-md text-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                                    />
                                ) : (
                                    new Date(task.due_date).toLocaleString()
                                )}
                            </p>
                            <p className="dark:text-neutral-300">
                                Status:{" "}
                                {editingTaskId === task.id ? (
                                    <select
                                        value={task.status}
                                        onChange={(e) =>
                                            handleTaskInputChange(
                                                task.id,
                                                "status",
                                                e.target.value
                                            )
                                        }
                                        className="border px-2 py-0 pr-10 rounded-md text-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">
                                            In Progress
                                        </option>
                                        <option value="Completed">
                                            Completed
                                        </option>
                                    </select>
                                ) : (
                                    task.status
                                )}
                            </p>
                            <p className="dark:text-neutral-300">
                                Priority:{" "}
                                {editingTaskId === task.id ? (
                                    <select
                                        value={task.priority}
                                        onChange={(e) =>
                                            handleTaskInputChange(
                                                task.id,
                                                "priority",
                                                e.target.value
                                            )
                                        }
                                        className="border px-2 py-0 pr-10 rounded-md text-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                ) : (
                                    task.priority
                                )}
                            </p>
                            <p className="dark:text-neutral-300">
                                Created By: {task.created_by.first_name}{" "}
                                {task.created_by.last_name}
                            </p>
                            <p className="dark:text-neutral-300">
                                Updated By: {task.updated_by.first_name}{" "}
                                {task.updated_by.last_name}
                            </p>
                            <p className="dark:text-neutral-300">
                                Created At:{" "}
                                {new Date(task.created_at).toLocaleString()}
                            </p>
                            <p className="dark:text-neutral-300">
                                Updated At:{" "}
                                {new Date(task.updated_at).toLocaleString()}
                            </p>
                        </div>

                        <div className="flex justify-start space-x-4 mt-4">
                            {editingTaskId === task.id ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => handleTaskSave(task.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleTaskCancel}
                                        className="bg-gray-300 text-black p-2 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTaskDelete(task.id)
                                        }
                                        className="text-red-500"
                                    >
                                        Delete
                                    </button>
                                </>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => handleTaskEditClick(task.id)}
                                    className="text-blue-500"
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                    </PageSectionCard>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
