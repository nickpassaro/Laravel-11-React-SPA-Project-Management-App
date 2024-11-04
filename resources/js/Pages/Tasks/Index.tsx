import Table from "@/Components/Table";
import TableCell from "@/Components/TableCell";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { Task } from "@/types/index";

export default function Index({
    tasks,
}: {
    tasks: {
        data: Task[];
    };
}) {
    return (
        <Table
            type="Tasks"
            columns={[
                "ID",
                "Description",
                "Due Date",
                "Status",
                "Priority",
                "Created By",
                "Assigned To",
                "Updated By",
                "Project ID",
                "Created At",
                "Updated At",
            ]}
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
                        {task.created_by.first_name} {task.created_by.last_name}
                    </TableCellTruncated>
                    <TableCellTruncated>
                        {task.assigned_to.first_name}{" "}
                        {task.assigned_to.last_name}
                    </TableCellTruncated>
                    <TableCellTruncated>
                        {task.updated_by.first_name} {task.updated_by.last_name}
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
    );
}
