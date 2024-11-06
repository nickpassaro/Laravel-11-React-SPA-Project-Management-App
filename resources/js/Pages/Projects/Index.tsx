import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCell from "@/Components/TableCell";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { Project } from "@/types/index";
import SearchPlusPagination from "@/Components/SearchPlusPagination";
import Pagination from "@/Components/Pagination";

export default function Index({
    projects,
    nextPage,
    previousPage,
    sortDirection,
}: {
    projects: {
        data: Project[];
    };
    nextPage?: string;
    previousPage?: string;
    sortDirection: string;
}) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <SearchPlusPagination
                nextPage={nextPage}
                previousPage={previousPage}
                placeholder="Search by name"
                resourceType="projects"
            />
            <PageSectionCard
                className="overflow-x-scroll"
                noPadding={true}
                noBg={true}
                noShadow={true}
            >
                <Table
                    columns={[
                        { label: "ID", key: "id" },
                        { label: "Project Name", key: "name" },
                        { label: "Due Date", key: "due_date" },
                        { label: "Status", key: "status" },
                        { label: "Tasks", key: "tasks" },
                        { label: "Created By", key: "created_by" },
                        { label: "Updated By", key: "updated_by" },
                        { label: "Created At", key: "created_at" },
                        { label: "Updated At", key: "updated_at" },
                    ]}
                    resourceType="projects"
                    sortDirection={sortDirection}
                >
                    {projects.data.map((project) => (
                        <tr
                            key={project.id}
                            className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                        >
                            <TableCell>{project.id}</TableCell>
                            <TableCellTruncated>
                                <Link
                                    href={route("projects.show", project.id)}
                                    className="hover:text-gray-600 dark:hover:text-gray-400 hover:underline"
                                >
                                    {project.name}
                                </Link>
                            </TableCellTruncated>
                            <TableCell>
                                {new Date(project.due_date).toLocaleString()}
                            </TableCell>
                            <TableCell>{project.status}</TableCell>
                            <TableCell>{project.tasks.length}</TableCell>
                            <TableCellTruncated>
                                {project.created_by.first_name}{" "}
                                {project.created_by.last_name}
                            </TableCellTruncated>
                            <TableCellTruncated>
                                {project.updated_by.first_name}{" "}
                                {project.updated_by.last_name}
                            </TableCellTruncated>
                            <TableCell>
                                {new Date(project.created_at).toLocaleString()}
                            </TableCell>
                            <TableCell>
                                {new Date(project.updated_at).toLocaleString()}
                            </TableCell>
                        </tr>
                    ))}
                </Table>
            </PageSectionCard>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                className="hidden short:flex"
            />
        </AuthenticatedLayout>
    );
}
