export default function Table({
    columns,
    resourceType,
    sortDirection,
    children,
}: {
    columns: { label: string; key: string }[];
    resourceType: "projects" | "tasks" | "users";
    sortDirection: string;
    children: React.ReactNode;
}) {
    return (
        <table className="border-collapse border-x-2 border-b-2 border-gray-200 dark:border-gray-800 whitespace-nowrap min-w-full">
            <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="py-1 px-2"
                            onClick={(e) => handleSort(column.key)}
                        >
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="dark:text-gray-200">{children}</tbody>
        </table>
    );
}
