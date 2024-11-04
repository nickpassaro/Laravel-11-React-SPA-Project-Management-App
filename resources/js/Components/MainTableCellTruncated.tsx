import MainTableCell from "./MainTableCell";

interface MainTableCellTruncatedProps {
    className?: string;
    children: React.ReactNode;
}

export default function MainTableCellTruncated({
    children,
}: MainTableCellTruncatedProps) {
    return (
        <MainTableCell className="max-w-96 text-ellipsis overflow-hidden">
            {children}
        </MainTableCell>
    );
}
