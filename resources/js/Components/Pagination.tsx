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
        <nav
            className={`flex flex-row-reverse justify-center md:justify-start gap-x-4 px-4 sm:px-0 ${className}`}
        >
            <div className="mx-0 my-0">
                <PrimaryButton link={true} href={nextPage} className="h-9" disabled={!nextPage}>
                    Next
                </PrimaryButton>
            </div>
            <div className="mx-0 my-0">
                <PrimaryButton link={true} href={previousPage} className="h-9" disabled={!previousPage}>
                    Previous
                </PrimaryButton>
            </div>
        </nav>
    );
}
