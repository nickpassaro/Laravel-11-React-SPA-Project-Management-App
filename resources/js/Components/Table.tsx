import { router } from "@inertiajs/react";

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
    // create the query string that till be handed to the router and then run the route
    const handleSort = (columnKey: string) => {
        const currentParams = new URLSearchParams(window.location.search);

        // Remove the page parameter to reset pagination
        currentParams.delete("page");

        // set sortField to column, then invert sortDirection
        const newSortField = columnKey;
        let newSortDirection = currentParams.get("sortDirection");
        if (!newSortDirection) {
            newSortDirection = sortDirection;
        }
        newSortDirection = newSortDirection === "asc" ? "desc" : "asc";

        currentParams.set("sortField", newSortField);
        currentParams.set("sortDirection", newSortDirection);

        router.get(
            route(`${resourceType}.index`),
            Object.fromEntries(currentParams)
        );
    };

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
