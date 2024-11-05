import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

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
    const [searchName, setSearchName] = useState("");

    // populate the search field from the URL query string
    useEffect(() => {
        const currentParams = new URLSearchParams(window.location.search);
        const nameFromUrl = currentParams.get("name");

        if (nameFromUrl) {
            setSearchName(nameFromUrl);
        }
    }, []);

    // set the search parameter from the search box
    const handleSearch = () => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("page");

        if (searchName) {
            currentParams.set("name", searchName);
        } else {
            currentParams.delete("name");
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
                <div className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-1">
                    <div className="flex gap-x-4 flex-grow">
                        <TextInput
                            className="py-2 h-9 w-full flex-grow"
                            id="searchName"
                            placeholder={placeholder}
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <PrimaryButton
                            onClick={handleSearch}
                            className="h-9"
                        >
                            Search
                        </PrimaryButton>
                    </div>
                    <select name="" id=""></select>
                    <select name="" id=""></select>
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
