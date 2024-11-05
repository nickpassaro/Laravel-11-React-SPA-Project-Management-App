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
        <nav className={`flex flex-row-reverse justify-center md:justify-start gap-x-8 md:gap-x-4 px-4 sm:px-0 ${className}`}>
            {nextPage && (
                <div className="mx-0 my-0">
                    <PrimaryButton link={true} href={nextPage} className="h-9">
                        Next
                    </PrimaryButton>
                </div>
            )}
            {previousPage && (
                <div className="mx-0 my-0">
                    <PrimaryButton link={true} href={previousPage} className="h-9">
                        Previous
                    </PrimaryButton>
                </div>
            )}
        </nav>
    );
}
