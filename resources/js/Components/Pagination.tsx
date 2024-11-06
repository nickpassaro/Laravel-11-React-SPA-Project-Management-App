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
    const buildHref = (pageUrl?: string) => {
        if (!pageUrl) return undefined;

        const currentParams = new URLSearchParams(window.location.search);

        const newUrl = new URL(pageUrl, window.location.origin);
        const newParams = new URLSearchParams(newUrl.search);

        newParams.forEach((value, key) => {
            currentParams.set(key, value);
        });

        return `${newUrl.pathname}?${currentParams.toString()}`;
    };

    return (
        <nav
            className={`flex flex-row-reverse justify-center md:justify-start gap-x-4 px-4 sm:px-0 ${className}`}
        >
            <div className="mx-0 my-0">
                <PrimaryButton
                    link={true}
                    href={buildHref(nextPage)}
                    className="h-9"
                    disabled={!nextPage}
                >
                    Next
                </PrimaryButton>
            </div>
            <div className="mx-0 my-0">
                <PrimaryButton
                    link={true}
                    href={buildHref(previousPage)}
                    className="h-9"
                    disabled={!previousPage}
                >
                    Previous
                </PrimaryButton>
            </div>
        </nav>
    );
}
