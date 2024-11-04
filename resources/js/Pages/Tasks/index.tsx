import MainTable from "@/Components/MainTable";
import MainTableCell from "@/Components/MainTableCell";
import { Task } from "@/types/index";

interface IndexProps {
    tasks: {
        data: Task[];
    };
}

export default function Index({ tasks }: IndexProps) {
    return (
        <MainTable
            type="tasks"
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
            <tbody className="dark:text-gray-200">
                {tasks.data.map((task) => (
                    <tr
                        key={task.id}
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                    >
                        <MainTableCell>
                            {task.id}
                        </MainTableCell>
                        <MainTableCell className="max-w-96 text-ellipsis overflow-hidden">
                            {task.description}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(task.due_date).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>
                            {task.status}
                        </MainTableCell>
                        <MainTableCell>
                            {task.priority}
                        </MainTableCell>
                        <MainTableCell>
                            {task.created_by.first_name}{" "}
                            {task.created_by.last_name}
                        </MainTableCell>
                        <MainTableCell>
                            {task.assigned_to.first_name}{" "}
                            {task.assigned_to.last_name}
                        </MainTableCell>
                        <MainTableCell>
                            {task.updated_by.first_name}{" "}
                            {task.updated_by.last_name}
                        </MainTableCell>
                        <MainTableCell>
                            {task.project.id}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(task.created_at).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(task.updated_at).toLocaleString()}
                        </MainTableCell>
                    </tr>
                ))}
            </tbody>
        </MainTable>
    );
}
