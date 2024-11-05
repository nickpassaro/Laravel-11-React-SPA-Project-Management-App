import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { User } from "@/types/index";
import { Link } from "@inertiajs/react";
import SearchPlusPagination from "@/Components/SearchPlusPagination";

export default function Index({
    users,
    nextPage,
    previousPage,
}: {
    users: {
        data: User[];
    };
    nextPage?: string;
    previousPage?: string;
}) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <SearchPlusPagination nextPage={nextPage} previousPage={previousPage} className="sticky top-0 py-4 -my-4 bg-gray-100 dark:bg-gray-900" />
            <PageSectionCard
                className="overflow-x-scroll"
                noPadding={true}
                noBg={true}
                noShadow={true}
            >
                <Table columns={["Name"]}>
                    {users.data.map((user) => (
                        <tr
                            key={user.id}
                            className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                        >
                            <TableCellTruncated>
                                {user.first_name} {user.last_name}
                            </TableCellTruncated>
                        </tr>
                    ))}
                </Table>
            </PageSectionCard>
        </AuthenticatedLayout>
    );
}
