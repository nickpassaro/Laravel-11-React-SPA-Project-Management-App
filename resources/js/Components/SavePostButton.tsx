import { router } from "@inertiajs/react";

export default function SavePostButton() {
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

        router.post(route("projects.store"), {
            name: nameInput.value,
            description: descriptionInput.value,
            due_date: dueDateInput.value,
            status: statusInput.value,
        });
    };
    return (
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
            id="project-save-button"
            onClick={(e) => {
                e.preventDefault();
                handleSave();
            }}
        >
            Save
        </button>
    );
}
