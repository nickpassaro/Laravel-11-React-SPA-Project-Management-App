import { router } from "@inertiajs/react";
import { useRef } from "react";

export default function Table({
    columns,
    resourceType,
    sortField,
    sortDirection,
    children,
}: {
    columns: { label: string; key: string }[];
    resourceType: "projects" | "tasks" | "users";
    sortField: string;
    sortDirection: string;
    children: React.ReactNode;
}) {
    const tableRef = useRef<HTMLTableElement>(null);

    const handleSort = (columnKey: string) => {
        const currentParams = new URLSearchParams(window.location.search);

        // Remove the page parameter to reset pagination
        currentParams.delete("page");

        // Set sortField to the key of the clicked column
        const newSortField = columnKey;
        currentParams.set("sortField", newSortField);

        // Invert sortDirection
        let newSortDirection = currentParams.get("sortDirection");
        if (!newSortDirection) {
            newSortDirection = sortDirection;
        }
        newSortDirection = newSortDirection === "asc" ? "desc" : "asc";
        currentParams.set("sortDirection", newSortDirection);

        // Instead of reloading the page, use router.replace to update the query string and fetch data
        router.replace(route(`${resourceType}.index`), {
            preserveState: true, // Keep the scroll position and component state
            preserveScroll: true, // Preserves the scroll position, including horizontal scroll
            data: Object.fromEntries(currentParams),
        });
    };

    return (
        <table
            ref={tableRef}
            className="border-gray-200 dark:border-gray-800 border-2 whitespace-nowrap min-w-full"
        >
            <thead className="bg-slate-200 dark:bg-slate-600 dark:text-gray-300">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="py-1 px-2"
                            onClick={() => handleSort(column.key)}
                        >
                            <span className="cursor-pointer">
                                {column.label}{" "}
                                {column.key === sortField && (
                                    <>
                                        {sortDirection === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </>
                                )}
                            </span>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="dark:text-gray-200">{children}</tbody>
        </table>
    );
}
