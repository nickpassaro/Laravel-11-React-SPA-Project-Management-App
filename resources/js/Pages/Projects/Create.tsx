import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";

export default function Show() {
    return (
        <AuthenticatedLayout header="New Project">
            <Head title="New Project" />

            <PageSectionCard>
                <div className="grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-[1fr_16rem] gap-2 lg:gap-x-8">
                    <form className=" h-full" id="project-form-1">
                        <label htmlFor="project-name-field">Project Name</label>
                        <input
                            type="text"
                            className="p-1 border border-gray-300 rounded-md text-sm w-full"
                            id="project-name-field"
                        />
                        <label htmlFor="project-description-field">
                            Project Description
                        </label>
                        <textarea
                            className="p-1 border border-gray-300 rounded-md text-sm w-full resize-y h-64"
                            id="project-description-field"
                        />
                    </form>

                    <form className=" h-full" id="project-form-2">
                        <label htmlFor="project-due-date-field">Due Date</label>
                        <input
                            type="datetime-local"
                            className="p-1 border border-gray-300 rounded-md text-sm w-full"
                            id="project-due-date-field"
                        />
                        <label htmlFor="project-status-field">Status</label>
                        <select
                            className="p-1 border border-gray-300 rounded-md text-sm w-full"
                            id="project-status-field"
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </form>
                </div>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
