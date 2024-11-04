import MainTable from "@/Components/MainTable";
import MainTableCell from "@/Components/MainTableCell";
import { Project } from "@/types/index";
import { Link } from "@inertiajs/react";

interface IndexProps {
    projects: {
        data: Project[];
    };
}

export default function Index({ projects }: IndexProps) {
    return (
        <MainTable
            type="projects"
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
            <tbody className="dark:text-gray-200">
                {projects.data.map((project) => (
                    <tr
                        key={project.id}
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                    >
                        <MainTableCell>
                            {project.id}
                        </MainTableCell>
                        <MainTableCell className="max-w-96 text-ellipsis overflow-hidden">
                            <Link
                                href={route("projects.show", project.id)}
                                className="hover:text-gray-600 hover:underline"
                            >
                                {project.name}
                            </Link>
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(project.due_date).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>
                            {project.status}
                        </MainTableCell>
                        <MainTableCell>
                            {project.tasks.length}
                        </MainTableCell>
                        <MainTableCell>
                            {project.created_by.first_name}{" "}
                            {project.created_by.last_name}
                        </MainTableCell>
                        <MainTableCell>
                            {project.updated_by.first_name}{" "}
                            {project.updated_by.last_name}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(project.created_at).toLocaleString()}
                        </MainTableCell>
                        <MainTableCell>
                            {new Date(project.updated_at).toLocaleString()}
                        </MainTableCell>
                    </tr>
                ))}
            </tbody>
        </MainTable>
    );
}
