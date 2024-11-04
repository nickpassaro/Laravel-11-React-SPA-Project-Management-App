import MainTable from "@/Components/MainTable";
import MainTableCell from "@/Components/MainTableCell";
import MainTableCellTruncated from "@/Components/MainTableCellTruncated";
import { Project } from "@/types/index";
import { Link } from "@inertiajs/react";

export default function Index({
    projects,
    nextPage,
    previousPage,
}: {
    projects: {
        data: Project[];
    };
    nextPage: string | null;
    previousPage: string | null;
}) {
    return (
        <>
            <MainTable
                type="Projects"
                columns={[
                    "ID",
                    "Project Name",
                    "Due Date",
                    "Status",
                    "Tasks",
                    "Created By",
                    "Updated By",
                    "Created At",
                    "Updated At",
                ]}
            >
                {projects.data.map((project) => (
                    <tr
                        key={project.id}
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                    >
                        <MainTableCell>{project.id}</MainTableCell>
                        <MainTableCellTruncated>
                            <Link
                                href={route("projects.show", project.id)}
                                className="hover:text-gray-600 hover:underline"
                            >
                                {project.name}
                            </Link>
                        </MainTableCellTruncated>
                        <MainTableCell>
                            {new Date(project.due_date).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>{project.status}</MainTableCell>
                        <MainTableCell>{project.tasks.length}</MainTableCell>
                        <MainTableCellTruncated>
                            {project.created_by.first_name}{" "}
                            {project.created_by.last_name}
                        </MainTableCellTruncated>
                        <MainTableCellTruncated>
                            {project.updated_by.first_name}{" "}
                            {project.updated_by.last_name}
                        </MainTableCellTruncated>
                        <MainTableCell>
                            {new Date(project.created_at).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(project.updated_at).toLocaleString()}
                        </MainTableCell>
                    </tr>
                ))}
            </MainTable>
            <nav className="flex justify-between">
                <div>
                    {previousPage && <Link href={previousPage}>Previous</Link>}
                </div>
                <div>
                    {nextPage && <Link href={nextPage}>Next</Link>}
                    </div>
            </nav>
        </>
    );
}
