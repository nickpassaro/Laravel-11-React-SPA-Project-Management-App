import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { User } from "@/types/index";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({
    users,
    nextPage,
    previousPage,
}: {
    users: {
        data: User[];
    };
    nextPage: string | null;
    previousPage: string | null;
}) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
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
            <nav className="flex justify-between mt-4">
                <div>
                    {previousPage && (
                        <PrimaryButton link={true} href={previousPage}>
                            Previous
                        </PrimaryButton>
                    )}
                </div>
                <div>
                    {nextPage && (
                        <PrimaryButton link={true} href={nextPage}>
                            Next
                        </PrimaryButton>
                    )}
                </div>
            </nav>
        </AuthenticatedLayout>
    );
}
