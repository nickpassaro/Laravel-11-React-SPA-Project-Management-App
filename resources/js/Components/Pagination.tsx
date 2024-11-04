import PrimaryButton from "./PrimaryButton";

export default function Pagination({
    className,
    nextPage,
    previousPage,
}: {
    className?: string;
    nextPage?: string;
    previousPage?: string;
}) {
    return (
        <nav className={`flex justify-between sm:justify-end space-x-4 px-4 sm:px-0 ${className}`}>
            {previousPage && (
                <div>
                    <PrimaryButton link={true} href={previousPage} className="h-9">
                        Previous
                    </PrimaryButton>
                </div>
            )}
            {nextPage && (
                <div>
                    <PrimaryButton link={true} href={nextPage} className="h-9">
                        Next
                    </PrimaryButton>
                </div>
            )}
        </nav>
    );
}
