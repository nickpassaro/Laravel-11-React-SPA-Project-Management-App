interface MainTableCellProps {
    className?: string;
    children: React.ReactNode;
}

export default function MainTableCell({
    className,
    children,
}: MainTableCellProps) {
    return (
        <td
            className={`p-4 border-r-2 border-gray-200 dark:border-gray-800 ${className}`}
        >
            {children}
        </td>
    );
}
