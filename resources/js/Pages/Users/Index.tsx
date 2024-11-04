import Table from "@/Components/Table";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { User } from "@/types/index";

export default function Index({
    users,
}: {
    users: {
        data: User[];
    };
}) {
    return (
        <Table type="Users" columns={["Name"]}>
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
    );
}
