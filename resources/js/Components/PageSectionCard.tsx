export default function PageSectionCard({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800 ${className}`}>
            {children}
        </div>
    );
}
