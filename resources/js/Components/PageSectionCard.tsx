export default function PageSectionCard({
    children,
    className,
    noPadding,
    noBg,
    noShadow,
}: {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
    noBg?: boolean;
    noShadow?: boolean;
}) {
    return (
        <div
            className={`
                ${noPadding ? `p-0` : "p-4 sm:p-8"}
                ${noBg ? `bg-transparent` : "bg-white dark:bg-gray-800"}
                ${noShadow ? `shadow-none` : "shadow sm:rounded-lg"}
                ${className}
            `}
        >
            {children}
        </div>
    );
}
