import MainTable from "@/Components/MainTable";
import MainTableCell from "@/Components/MainTableCell";
import { User } from "@/types/index";

interface IndexProps {
    users: {
        data: User[];
    };
}

export default function Index({ users }: IndexProps) {
    return (
        <MainTable
            type="tasks"
            columns={[
                "Name",
            ]}
        >
            <tbody className="dark:text-gray-200">
                {users.data.map((user) => (
                    <tr
                        key={user.id}
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                    >
                        <MainTableCell className="max-w-96 text-ellipsis overflow-hidden">
                            {user.first_name} {user.last_name}
                        </MainTableCell>
                    </tr>
                ))}
            </tbody>
        </MainTable>
    );
}
