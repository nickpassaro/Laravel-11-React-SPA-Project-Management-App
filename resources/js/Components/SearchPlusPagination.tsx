import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

export default function SearchPlusPagination({
    nextPage,
    previousPage,
    className,
    placeholder,
    resourceType,
}: {
    nextPage?: string;
    previousPage?: string;
    className?: string;
    placeholder?: string;
    resourceType: "projects" | "tasks" | "users";
}) {
    const [searchBoxQuery, setSearchBoxQuery] = useState("");

    // populate the search field from the URL query string
    useEffect(() => {
        const currentParams = new URLSearchParams(window.location.search);
        const searchBoxQueryFromUrl = currentParams.get("searchBox");

        if (searchBoxQueryFromUrl) {
            setSearchBoxQuery(searchBoxQueryFromUrl);
        }
    }, []);

    // set the search parameter from the search box
    const handleSearch = () => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("page");

        if (searchBoxQuery) {
            currentParams.set("searchBox", searchBoxQuery);
        } else {
            currentParams.delete("searchBox");
        }

        // navigate to the new URL with the search parameter added as a query string
        router.get(
            route(`${resourceType}.index`),
            Object.fromEntries(currentParams)
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    // buildHref function is to run the pagination links
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
        <div
            className={`grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 ${className}`}
        >
            <div className="mx-4 sm:mx-0 pb-4 md:pb-0 border-b-2 border-gray-500 md:border-b-0">
                <div className="flex gap-x-4 flex-grow pb-2">
                    <TextInput
                        className="py-2 h-9 w-full flex-grow"
                        id="searchBoxQuery"
                        placeholder={placeholder}
                        value={searchBoxQuery}
                        onChange={(e) => setSearchBoxQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <PrimaryButton onClick={handleSearch} className="h-9">
                        Search
                    </PrimaryButton>
                </div>
                <div className="flex gap-x-4 flex-grow justify-stretch">
                    {(resourceType === "projects" ||
                        resourceType === "tasks") && (
                        <SelectInput className="py-1 flex-grow self-stretch">
                            <option value="">Status</option>
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </SelectInput>
                    )}
                    {resourceType === "tasks" && (
                        <SelectInput className="py-1 flex-grow self-stretch">
                            <option value="">Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </SelectInput>
                    )}
                </div>
            </div>
            <nav className="flex flex-row-reverse justify-center md:justify-start gap-x-4 sm:px-0 mt-0 px-0 md:flex-grow-0">
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
        </div>
    );
}
