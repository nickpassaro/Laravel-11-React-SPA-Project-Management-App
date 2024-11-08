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

            {/* edit link */}
            <div className="flex justify-end gap-x-2">
                <a
                    href="#"
                    className="block text-blue-500 underline px-4 mt-0"
                    onClick={(e) => {
                        e.preventDefault();
                        const target = e.target as HTMLElement;
                        target.textContent =
                            target.textContent === "Edit" ? "Cancel" : "Edit";
                        const inputs = document.querySelectorAll(
                            "#project-name, #project-description, #project-due-date, #project-status, #project-form-1, #project-form-2, #project-form-3, #project-form-4, #project-save-button"
                        );
                        inputs.forEach((input) => {
                            input.classList.toggle("hidden");
                        });
                    }}
                >
                    Edit
                </a>

                {/* save button */}
                <button
                    type="button"
                    className="px-2 py-1 bg-blue-500 text-white rounded-md text-sm hidden"
                    id="project-save-button"
                    onClick={(e) => {
                        e.preventDefault();
                        const formIds = [
                            "project-form-1",
                            "project-form-2",
                            "project-form-3",
                            "project-form-4",
                        ];
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

                        if (nameInput) {
                            console.log("Project Name:", nameInput.value);
                        }
                        if (descriptionInput) {
                            console.log(
                                "Project Description:",
                                descriptionInput.value
                            );
                        }
                        if (dueDateInput) {
                            console.log(
                                "Project Due Date:",
                                dueDateInput.value
                            );
                        }
                        if (statusInput) {
                            console.log("Project Status:", statusInput.value);
                        }
                    }}
                >
                    Save
                </button>
            </div>

            {/* Project info card */}
            <PageSectionCard>
                <div className="grid gap-2 lg:grid-rows-2 lg:grid-cols-[1fr_auto] lg:gap-x-8">
                    {/* left side */}
                    <div className="grid gap-2 lg:row-span-2 lg:border-r-2 lg:pr-4 xl:pr-24 xl:gap-y-8">
                        {/* project name */}
                        <h2
                            className="text-xl font-bold text-gray-900 dark:text-neutral-100"
                            id="project-name"
                        >
                            {project.name}
                        </h2>

                        {/* project description */}
                        <p
                            className="text-sm dark:text-neutral-300 lg:text-base"
                            id="project-description"
                        >
                            {project.description}
                        </p>

                        {/* project name update field */}
                        <form
                            action=""
                            className="hidden"
                            id="project-form-1"
                            onSubmit={() => {
                                const nameInput = document.getElementById(
                                    `project-name-field`
                                ) as HTMLInputElement;
                                if (nameInput) {
                                    const newName = nameInput.value;
                                    console.log(newName);
                                }
                            }}
                        >
                            <input
                                type="text"
                                defaultValue={`${project.name}`}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full"
                                id="project-name-field"
                            />
                        </form>

                        {/* project description update field */}
                        <form
                            action=""
                            className="hidden h-64"
                            id="project-form-2"
                            onSubmit={() => {
                                const descriptionInput =
                                    document.getElementById(
                                        `project-description-field`
                                    ) as HTMLTextAreaElement;
                                if (descriptionInput) {
                                    const newdescription =
                                        descriptionInput.value;
                                    console.log(newdescription);
                                }
                            }}
                        >
                            <textarea
                                defaultValue={`${project.description}`}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full h-full resize-y"
                                id="project-description-field"
                            />
                        </form>
                    </div>

                    {/* right side */}
                    <div className="grid gap-2 my-4 sm:gap-4 sm:grid-cols-[auto_auto_1fr] sm:border-y-2 sm:py-2 lg:grid-rows-3 lg:grid-cols-1 lg:gap-2 lg:border-y-0 lg:my-0 lg:py-0 items-center lg:items-start">
                        {/* project due date */}
                        <p
                            className="text-sm dark:text-neutral-300"
                            id="project-due-date"
                        >
                            Due: {new Date(project.due_date).toLocaleString()}
                        </p>

                        {/* project status */}
                        <p
                            className="text-sm dark:text-neutral-300"
                            id="project-status"
                        >
                            Status: {project.status}
                        </p>

                        {/* project due date update field */}
                        <form
                            action=""
                            className="hidden"
                            id="project-form-3"
                            onSubmit={() => {
                                const dueDateInput = document.getElementById(
                                    `project-due-date-field`
                                ) as HTMLInputElement;
                                if (dueDateInput) {
                                    const newDueDate = dueDateInput.value;
                                    console.log(newDueDate);
                                }
                            }}
                        >
                            <input
                                type="datetime-local"
                                defaultValue={new Date(project.due_date)
                                    .toISOString()
                                    .slice(0, 16)}
                                className="p-1 border border-gray-300 rounded-md text-sm w-full"
                                id="project-due-date-field"
                            />
                        </form>

                        {/* project status update field */}
                        <form
                            action=""
                            className="hidden"
                            id="project-form-4"
                            onSubmit={() => {
                                const statusInput = document.getElementById(
                                    `project-status-field`
                                ) as HTMLSelectElement;
                                if (statusInput) {
                                    const newStatus = statusInput.value;
                                    console.log(newStatus);
                                }
                            }}
                        >
                            <label
                                htmlFor="project-due-date-field"
                                className="inline flex-grow-0"
                            >
                                <span className="pr-1">Status:</span>
                            </label>
                            <select
                                id="project-due-date-field"
                                name="project-due-date-field"
                                className="inline pl-2 pr-8 py-0 text-xs border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md flex-grow-0"
                                defaultValue={project.status}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </form>

                        {/* number of tasks completed */}
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

                    {/* Project Created and Updated Info (Updated info needs to change automatically by looking at the current datetime and the currently logged in user. That will be done in the update method in the controller) */}
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

            {/* tasks section lead-in */}
            <PageSectionCard noPadding={true} noBg={true} noShadow={true}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-neutral-100 -mb-4 px-4">
                    Tasks:
                </h2>
            </PageSectionCard>

            {/* tasks grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0 text-sm">
                {tasks.map((task) => (
                    // task card
                    <PageSectionCard key={task.id}>
                        <p className="mb-2">{task.description}</p>
                        <div className="text-xs text-gray-700 space-y-2 mt-6">
                            {/* due date, edit link, date field, and submit button */}
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
                                            console.log(newDueDate);
                                        }
                                    }}
                                >
                                    <input
                                        type="datetime-local"
                                        defaultValue={new Date(task.due_date)
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
                            </div>

                            {/* status drop down */}
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
                                        defaultValue={task.status}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const statusInput =
                                                document.getElementById(
                                                    `project-status-field`
                                                ) as HTMLSelectElement;
                                            if (statusInput) {
                                                const newStatus =
                                                    statusInput.value;
                                                console.log(newStatus);
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

                            {/* priority drop down */}
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
                                        defaultValue={task.priority}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const priorityInput =
                                                document.getElementById(
                                                    `project-priority-field`
                                                ) as HTMLSelectElement;
                                            if (priorityInput) {
                                                const newPriority =
                                                    priorityInput.value;
                                                console.log(newPriority);
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

                            {/* assigned to, edit link, date field, and submit button */}
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
                                            console.log(newAssignee);
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
                            </div>

                            {/* Task Created and Updated Info (Updated info needs to change automatically by looking at the current datetime and the currently logged in user. That will be done in the update method in the controller) */}
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
