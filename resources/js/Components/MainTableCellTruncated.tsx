import MainTableCell from "./MainTableCell";

export default function MainTableCellTruncated({
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <MainTableCell className="max-w-96 text-ellipsis overflow-hidden">
            {children}
        </MainTableCell>
    );
}
