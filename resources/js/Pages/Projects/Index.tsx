import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCell from "@/Components/TableCell";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { Project } from "@/types/index";
import SearchPlusPagination from "@/Components/SearchPlusPagination";

export default function Index({
    projects,
    nextPage,
    previousPage,
}: {
    projects: {
        data: Project[];
    };
    nextPage?: string;
    previousPage?: string;
}) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <SearchPlusPagination
                nextPage={nextPage}
                previousPage={previousPage}
                className="sticky top-0 py-4 -my-4 bg-gray-100 dark:bg-gray-900"
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
        </AuthenticatedLayout>
    );
}
