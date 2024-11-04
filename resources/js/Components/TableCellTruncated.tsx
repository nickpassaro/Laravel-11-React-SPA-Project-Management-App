import TableCell from "./TableCell";

export default function TableCellTruncated({
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <TableCell className="max-w-96 text-ellipsis overflow-hidden">
            {children}
        </TableCell>
    );
}
