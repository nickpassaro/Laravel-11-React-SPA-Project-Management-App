import MainTable from "@/Components/MainTable";
import MainTableCellTruncated from "@/Components/MainTableCellTruncated";
import { User } from "@/types/index";

interface IndexProps {
    users: {
        data: User[];
    };
}

export default function Index({ users }: IndexProps) {
    return (
        <MainTable type="Users" columns={["Name"]}>
            {users.data.map((user) => (
                <tr
                    key={user.id}
                    className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                >
                    <MainTableCellTruncated>
                        {user.first_name}{" "}
                        {user.last_name}
                    </MainTableCellTruncated>
                </tr>
            ))}
        </MainTable>
    );
}
