export default function PageSectionCard({
    children,
    className,
    padding,
}: {
    children: React.ReactNode;
    className?: string;
    padding?: string;
}) {
    return (
        <div
            className={`bg-white dark:bg-gray-800 shadow sm:rounded-lg ${padding ? `p-${padding}` : 'p-4 sm:p-8'} ${className}`}
        >
            {children}
        </div>
    );
}
