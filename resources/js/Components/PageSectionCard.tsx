export default function PageSectionCard({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
            {children}
        </div>
    );
}
