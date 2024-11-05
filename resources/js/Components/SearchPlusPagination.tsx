import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import Pagination from "./Pagination";
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

    useEffect(() => {
        const currentParams = new URLSearchParams(window.location.search);
        const nameFromUrl = currentParams.get("name");

        if (nameFromUrl) {
            setSearchName(nameFromUrl);
        }
    }, []);

    const handleSearch = () => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("page");

        if (searchName) {
            currentParams.set("name", searchName);
        } else {
            currentParams.delete("name");
        }

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

    return (
        <div
            className={`grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 ${className}`}
        >
            <div className="mx-4 sm:mx-0 pb-4 md:pb-0 border-b-2 border-gray-500 md:border-b-0 flex gap-x-4 flex-grow">
                <TextInput
                    className="py-2 h-9 w-full flex-grow"
                    id="searchName"
                    placeholder={placeholder}
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <PrimaryButton
                    link={true}
                    onClick={handleSearch}
                    className="h-9"
                >
                    Search
                </PrimaryButton>
            </div>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                className="mt-0 px-0 md:flex-grow-0"
            />
        </div>
    );
}
