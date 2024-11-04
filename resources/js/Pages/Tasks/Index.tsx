import MainTable from "@/Components/MainTable";
import MainTableCell from "@/Components/MainTableCell";
import MainTableCellTruncated from "@/Components/MainTableCellTruncated";
import { Task } from "@/types/index";

export default function Index({
    tasks,
}: {
    tasks: {
        data: Task[];
    };
}) {
    return (
        <MainTable
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
                    <MainTableCell>{task.id}</MainTableCell>
                    <MainTableCellTruncated>
                        {task.description}
                    </MainTableCellTruncated>
                    <MainTableCell>
                        {new Date(task.due_date).toLocaleString()}
                    </MainTableCell>
                    <MainTableCell>{task.status}</MainTableCell>
                    <MainTableCell>{task.priority}</MainTableCell>
                    <MainTableCellTruncated>
                        {task.created_by.first_name} {task.created_by.last_name}
                    </MainTableCellTruncated>
                    <MainTableCellTruncated>
                        {task.assigned_to.first_name}{" "}
                        {task.assigned_to.last_name}
                    </MainTableCellTruncated>
                    <MainTableCellTruncated>
                        {task.updated_by.first_name} {task.updated_by.last_name}
                    </MainTableCellTruncated>
                    <MainTableCell>{task.project.id}</MainTableCell>
                    <MainTableCell>
                        {new Date(task.created_at).toLocaleString()}
                    </MainTableCell>
                    <MainTableCell>
                        {new Date(task.updated_at).toLocaleString()}
                    </MainTableCell>
                </tr>
            ))}
        </MainTable>
    );
}
