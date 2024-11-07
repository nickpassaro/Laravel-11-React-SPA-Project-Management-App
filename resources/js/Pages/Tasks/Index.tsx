import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCell from "@/Components/TableCell";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { Task } from "@/types/index";
import SearchPlusPagination from "@/Components/SearchPlusPagination";
import Pagination from "@/Components/Pagination";

export default function Index({
    tasks,
    nextPage,
    previousPage,
    sortField,
    sortDirection,
}: {
    tasks: {
        data: Task[];
    };
    nextPage?: string;
    previousPage?: string;
    sortField: string;
    sortDirection: string;
}) {
    return (
        <AuthenticatedLayout header="All Tasks" isTablePage={true}>
            <Head title="All Tasks" />
            <SearchPlusPagination
                nextPage={nextPage}
                previousPage={previousPage}
                placeholder="Search by description"
                resourceType="tasks"
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
                        { label: "Description", key: "description" },
                        { label: "Due Date", key: "due_date" },
                        { label: "Status", key: "status" },
                        { label: "Priority", key: "priority" },
                        { label: "Created By", key: "created_by" },
                        { label: "Assigned To", key: "assigned_to" },
                        { label: "Updated By", key: "updated_by" },
                        { label: "Project ID", key: "project_id" },
                        { label: "Created At", key: "created_at" },
                        { label: "Updated At", key: "updated_at" },
                    ]}
                    resourceType="tasks"
                    sortField={sortField}
                    sortDirection={sortDirection}
                >
                    {tasks.data.map((task) => (
                        <tr
                            key={task.id}
                            className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                        >
                            <TableCell>{task.id}</TableCell>
                            <TableCellTruncated>
                                {task.description}
                            </TableCellTruncated>
                            <TableCell>
                                {new Date(task.due_date).toLocaleString()}
                            </TableCell>
                            <TableCell>{task.status}</TableCell>
                            <TableCell>{task.priority}</TableCell>
                            <TableCellTruncated>
                                {task.created_by.first_name}{" "}
                                {task.created_by.last_name}
                            </TableCellTruncated>
                            <TableCellTruncated>
                                {task.assigned_to.first_name}{" "}
                                {task.assigned_to.last_name}
                            </TableCellTruncated>
                            <TableCellTruncated>
                                {task.updated_by.first_name}{" "}
                                {task.updated_by.last_name}
                            </TableCellTruncated>
                            <TableCell>{task.project.id}</TableCell>
                            <TableCell>
                                {new Date(task.created_at).toLocaleString()}
                            </TableCell>
                            <TableCell>
                                {new Date(task.updated_at).toLocaleString()}
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
