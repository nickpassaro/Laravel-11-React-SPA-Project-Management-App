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
                <div className="grid gap-2 lg:grid-rows-2 lg:grid-cols-[1fr_auto] lg:gap-x-8">
                    <div className="grid gap-2 lg:row-span-2 lg:border-r-2 lg:pr-4 xl:pr-24 xl:gap-y-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100">
                            {project.name}
                        </h2>
                        <p className="text-sm dark:text-neutral-300 lg:text-base xl:text-lg">
                            {project.description}
                        </p>
                    </div>
                    <div className="grid gap-2 my-4 sm:gap-4 md:gap-16 sm:grid-cols-[auto_auto_1fr] sm:border-y-2 sm:py-2 lg:grid-rows-3 lg:grid-cols-1 lg:gap-2 lg:border-y-0 lg:my-0 lg:py-0 self-start">
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
                                    {new Date(task.due_date).toLocaleString()}{" "}
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
                                {task.due_date && (
                                    <form
                                        action=""
                                        className="hidden"
                                        id={`due-date-form-${task.id}`}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const dueDateInput =
                                                document.getElementById(
                                                    `due-date-input-${task.id}`
                                                ) as HTMLInputElement;
                                            if (dueDateInput) {
                                                const newDueDate =
                                                    dueDateInput.value;
                                                // Handle the new due date value here
                                            }
                                        }}
                                    >
                                        <input
                                            type="datetime-local"
                                            defaultValue={new Date(
                                                task.due_date
                                            )
                                                .toISOString()
                                                .slice(0, 16)}
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
                                )}
                            </div>
                            <div className="flex flex-row items-center">
                                <form action="">
                                    <label
                                        htmlFor={`status-${task.id}`}
                                        className="inline flex-grow-0"
                                    >
                                        <span className="pr-1">Status:</span>
                                    </label>
                                    <select
                                        id={`status-${task.id}`}
                                        name={`status-${task.id}`}
                                        className="inline pl-2 pr-8 py-0 text-xs border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md flex-grow-0"
                                        value={task.status}
                                        onChange={(e) => {
                                            // Handle the status change here
                                        }}
                                    >
                                        <option value="Not Started">
                                            Not Started
                                        </option>
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
                                <form action="">
                                    <label
                                        htmlFor={`priority-${task.id}`}
                                        className="inline flex-grow-0"
                                    >
                                        <span className="pr-1">Priority:</span>
                                    </label>
                                    <select
                                        id={`priority-${task.id}`}
                                        name={`priority-${task.id}`}
                                        className="inline pl-2 pr-8 py-0 text-xs border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md flex-grow-0"
                                        value={task.priority}
                                        onChange={(e) => {
                                            // Handle the priority change here
                                        }}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </form>
                            </div>
                            <div>
                                <p>
                                    Assigned To: {task.assigned_to.first_name}{" "}
                                    {task.assigned_to.last_name}{" "}
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
                                            const assignedToInput =
                                                document.getElementById(
                                                    `assigned-to-form-${task.id}`
                                                );
                                            if (assignedToInput) {
                                                assignedToInput.classList.toggle(
                                                    "hidden"
                                                );
                                            }
                                        }}
                                    >
                                        <span className="pl-1">Edit</span>
                                    </a>
                                </p>
                                {task.assigned_to && (
                                    <form
                                        action=""
                                        className="hidden"
                                        id={`assigned-to-form-${task.id}`}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const assignedToInput =
                                                document.getElementById(
                                                    `assigned-to-input-${task.id}`
                                                ) as HTMLInputElement;
                                            if (assignedToInput) {
                                                const newAssignee =
                                                    assignedToInput.value;
                                                // Handle the new assignee value here
                                            }
                                        }}
                                    >
                                        <input
                                            type="text"
                                            defaultValue={`${task.assigned_to.first_name} ${task.assigned_to.last_name}`}
                                            className="mt-2 p-1 border border-gray-300 rounded-md text-sm"
                                            id={`assigned-to-input-${task.id}`}
                                        />
                                        <button
                                            type="submit"
                                            className="mt-2 ml-2 px-2 py-1 bg-blue-500 text-white rounded-md text-sm"
                                        >
                                            Save
                                        </button>
                                    </form>
                                )}
                            </div>
                            <p>
                                Created By: {task.created_by.first_name}{" "}
                                {task.created_by.last_name}
                            </p>
                            <p>
                                Updated By: {task.updated_by.first_name}{" "}
                                {task.updated_by.last_name}{" "}
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
