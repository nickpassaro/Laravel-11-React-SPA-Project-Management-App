import PrimaryButton from "./PrimaryButton";

export default function Pagination({
    nextPage,
    previousPage,
}: {
    nextPage: string | null;
    previousPage: string | null;
}) {
    return (
        <nav className="flex justify-end space-x-4 mt-4">
            {previousPage && (
                <div>
                    <PrimaryButton link={true} href={previousPage}>
                        Previous
                    </PrimaryButton>
                </div>
            )}
            {nextPage && (
                <div>
                    <PrimaryButton link={true} href={nextPage}>
                        Next
                    </PrimaryButton>
                </div>
            )}
        </nav>
    );
}
