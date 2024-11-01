import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Project } from "@/types/index";

interface IndexProps {
    projects: {
        data: Project[];
    };
}

export default function Index({ projects }: IndexProps) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Updated By</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.data.map((project) => (
                        <tr>
                            <td>{project.id}</td>
                            <td>
                                <img
                                    src={project.image_path}
                                    alt={project.image_path}
                                    width="50"
                                    height="50"
                                />
                            </td>
                            <td>{project.name}</td>
                            <td>{project.due_date}</td>
                            <td>{project.status}</td>
                            <td>
                                {project.created_by.first_name}{" "}
                                {project.created_by.last_name}
                            </td>
                            <td>
                                {project.updated_by.first_name}{" "}
                                {project.updated_by.last_name}
                            </td>
                            <td>{project.created_at}</td>
                            <td>{project.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
