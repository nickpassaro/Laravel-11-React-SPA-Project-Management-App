import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <AuthenticatedLayout header="All Tasks">
            <Head title="All Tasks" />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Image</th>
                        <th>Created By</th>
                        <th>Assigned To</th>
                        <th>Updated By</th>
                        <th>Project ID</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
