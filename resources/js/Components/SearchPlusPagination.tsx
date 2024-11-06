import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import Pagination from "./Pagination";
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
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedPriority, setSelectedPriority] = useState<string | null>(
        null
    );

    // populate the fields from the URL query string
    useEffect(() => {
        const currentParams = new URLSearchParams(window.location.search);
        setSearchBoxQuery(currentParams.get("searchBox") || "");
        setSelectedStatus(currentParams.get("status"));
        setSelectedPriority(currentParams.get("priority"));
    }, []);

    // create the query string that till be handed to the router and then run the route
    const handleSearch = () => {
        const currentParams = new URLSearchParams(window.location.search);

        // Remove the page parameter to reset pagination
        currentParams.delete("page");

        // Handle search box query
        if (searchBoxQuery) {
            currentParams.set("searchBox", searchBoxQuery);
        } else {
            currentParams.delete("searchBox");
        }

        // Handle status dropdown
        if (selectedStatus) {
            currentParams.set("status", selectedStatus);
        } else {
            currentParams.delete("status");
        }

        // Handle priority dropdown
        if (selectedPriority) {
            currentParams.set("priority", selectedPriority);
        } else {
            currentParams.delete("priority");
        }

        // Navigate to the new URL with updated query parameters
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
            className={`grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 sticky short:static top-0 py-4 -my-4 bg-gray-100 dark:bg-gray-900 ${className}`}
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
                        <SelectInput
                            className="py-1 flex-grow self-stretch"
                            id="searchByStatusDropDown"
                            value={selectedStatus || ""}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="">Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </SelectInput>
                    )}
                    {resourceType === "tasks" && (
                        <SelectInput
                            className="py-1 flex-grow self-stretch"
                            id="searchByPriorityDropDown"
                            value={selectedPriority || ""}
                            onChange={(e) =>
                                setSelectedPriority(e.target.value)
                            }
                        >
                            <option value="">Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </SelectInput>
                    )}
                </div>
            </div>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                className="mt-0 px-0 md:flex-grow-0"
            />
        </div>
    );
}
